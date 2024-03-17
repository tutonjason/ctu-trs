import { defineStore } from "pinia" 
import { ref, type Ref} from "vue" 
import router from "@/router" 
import { 
  onAuthStateChanged, 
  signInWithRedirect,
  signOut,
} from "firebase/auth" 
import { auth, googleProvider } from "@/firebase" 
import { TRS_SESSION_KEY } from "@/constants/session"
import { AppRoutes } from "@/constants/routes"


export const useSessionStore = defineStore('session', () => {

  // STATES
  const currentUser: Ref<{} | null> = ref({}) 


  // METHODS
  const googleSignIn = async () => {
    console.log('>>> signing in',) 
    try {
      await signInWithRedirect(auth, googleProvider) 
    } catch (error) {
      console.log('>>> signInWithRedirect::' , error) 
    }
  }

  const googleSignOut = async () => {
    console.log('>>> signing out',)
    try {
      await signOut(auth).then(() => {
        currentUser.value = null 
        sessionStorage.setItem(TRS_SESSION_KEY, JSON.stringify({ isLoggedIn: false }))
        router.push(AppRoutes.login.path) 
      }) 

    } catch (error) {
      console.log('>>> signOut::' , error)
    }
  }

  const getAuthenticatedUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('>>> user', user);
        currentUser.value = user 
        sessionStorage.setItem(TRS_SESSION_KEY, JSON.stringify({ isLoggedIn: true }))
        router.push(AppRoutes.home.path) 
      } else {
        console.log('>>> user', user);
        currentUser.value = null
        sessionStorage.setItem(TRS_SESSION_KEY, JSON.stringify({ isLoggedIn: false }))
        if(router.currentRoute.value.path !== AppRoutes.login.path && router.currentRoute.value.path !== AppRoutes.register.path) {
          router.push(AppRoutes.login.path)
        }
      }
    })
  }

  return {
    currentUser,
    googleSignIn,
    googleSignOut,
    getAuthenticatedUser,
  }
})