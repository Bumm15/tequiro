import React, { useContext, useEffect, useState } from 'react';
import { auth, storage } from '../firebaseConfig';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    AuthErrorCodes,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { doc, getDoc, query, where, orderBy } from 'firebase/firestore';

const AuthContext = React.createContext();

const provider = new GoogleAuthProvider();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();

    // listen to user auth interactios
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        })
        return unsubscribe;
    }, [])

    const errorMessages = {
        [AuthErrorCodes.EMAIL_EXISTS]: 'E-mail is already in use, try to log in or reset your password',
        [AuthErrorCodes.INVALID_EMAIL]: 'Invalid e-mail address',
    }

    async function verifyCode(inputCode, email) {
        const docRef = doc(storage, 'verificationCodes', email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().code === inputCode) {
            return {success: true};
        } else {
            return { error: 'Verification code is incorrect or expired.'}
        }
    }

    // SignUp function
    async function signUp(email, password) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          // Send the verification code via email
          return { user: userCredential.user }; // Return user object on success
        } catch (error) {
          return { error: error.message }; // Return error message on failure
        }
      }

    async function signIn(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            return error.message
        }
    }

    /*
    async function signInWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
    }
    */

    async function passwordReset(email) {
        try {
            await sendPasswordResetEmail(auth, email);
            return true;
        } catch (error) {
            return error.message;
        }
    }

    async function checkIfEmailIsRegisterd(email) {
        //const docRef = doc(storage, 'users');

        const q = query(storage, where("email", "==", email));
        await getDoc(q).then(snapshot => {
            return snapshot.size;
        });
    }

    function logOut() {
        window.location.href = "/";
        return signOut(auth)
    }



    const value = {
        user,
        signIn,
        logOut,
        signUp,
        auth,
        passwordReset,
        verifyCode,
        checkIfEmailIsRegisterd
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>)
}
