import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const auth = getAuth(app)
const [user, setUser] = useState();

// sign in with google
const handleGoogleSignIn = (provider) =>{
    return signInWithPopup(auth,provider)
}
// create user with register 
const createNewUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// sign in with email and password
const loginWithEmailPassword = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// user observer 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return ()=> unsubscribe();
},[])
// console.log(user)
const authInfo = {
                user,
                handleGoogleSignIn,
                loginWithEmailPassword,
                createNewUser,
                
            }
    return (
       
            
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
       
    );
}; 

export default AuthProvider;