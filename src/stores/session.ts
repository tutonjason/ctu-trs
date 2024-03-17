import { defineStore } from "pinia";
import { ref, type Ref} from "vue";
import router from "@/router";

import { 
  GoogleAuthProvider, 
  getAuth, 
  onAuthStateChanged, 
  signInWithRedirect,
  signOut,
} from "firebase/auth";


export const useSessionStore = defineStore('session', () => {

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  // STATES
  const currentUser: Ref<{} | null> = ref({});


  // METHODS
  const googleSignIn = async () => {
    console.log('==== signing in',);
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.log('==== signInWithRedirect::' , error);
    }
  }

  const googleSignOut = async () => {
    console.log('==== signing out',)
    try {
      await signOut(auth).then(() => {
        currentUser.value = null;
      });

    } catch (error) {
      console.log('==== signOut::' , error)
    }
  }

  const getAuthenticatedUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('==== onAuthStateChanged user', user)
        currentUser.value = user;
        console.log('==== current route', router.currentRoute.value.name)
        if(router.currentRoute.value.name === 'login'){
          router.push('/dashboard')
        }
      } else {
        console.log('==== onAuthStateChanged user', user)
        currentUser.value = null;
        if(router.currentRoute.value.name !== 'login'){
          router.push('/')
        }
      }
    });
  }

  return {
    currentUser,
    googleSignIn,
    googleSignOut,
    getAuthenticatedUser,
  }
})