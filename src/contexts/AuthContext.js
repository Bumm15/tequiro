import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signOut,
    AuthErrorCodes
} from 'firebase/auth'

const AuthContext = React.createContext();

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

    async function signUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (!userCredential.user.emailVerified) {
                sendEmailVerification(userCredential)
            }
        } catch (error) {
            const errorMessage = errorMessages[error.code] || 'Unknown error.. Please try again later';
            //throw new Error(errorMessage);
            return errorMessage;
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
