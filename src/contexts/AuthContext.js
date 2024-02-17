import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signOut,
    AuthErrorCodes,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

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

    // SignUp function
    async function signUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user); // Send verification email

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
            await sendEmailVerification(auth, email);
            return true;
        } catch (error) {
            return error.message;
        }
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
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>)
}
