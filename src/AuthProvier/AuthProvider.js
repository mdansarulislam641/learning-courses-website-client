import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const auth = getAuth(app)
const [user, setUser] = useState();
const [loading, setLoading] = useState(true);

// sign in with google
const handleGoogleSignIn = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
// create user with register 
const createNewUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// sign in with email and password
const loginWithEmailPassword = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// user observer 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false);
    })
    return ()=> unsubscribe();
},[])

// logout user 
    const logOutUser = () =>{
        return signOut(auth)
    }
const authInfo = {
                user,
                loading,
                handleGoogleSignIn,
                loginWithEmailPassword,
                createNewUser,
                logOutUser
                
            }
    return (
       
            
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
       
    );
}; 

export default AuthProvider;