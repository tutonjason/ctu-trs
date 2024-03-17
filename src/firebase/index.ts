import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

export const app = initializeApp({
    apiKey: "AIzaSyDYbGpPLzP5Hvak3XSJv864KEHSgNbnjRE",
    authDomain: "thesis-tracking-system-ctu.firebaseapp.com",
    projectId: "thesis-tracking-system-ctu",
    storageBucket: "thesis-tracking-system-ctu.appspot.com",
    messagingSenderId: "857266982545",
    appId: "1:857266982545:web:17ab01c731a6ad82c97930",
    measurementId: "G-76BXNJ8EQ6"
})

const db = getFirestore(app);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account'
})

// COLLLECTION REFS:
const departmentsRef = collection(db, 'departments')


export {
    db,
		auth,
		googleProvider,
    departmentsRef,
}