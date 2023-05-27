import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in 
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfileData = (name, photo) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo});
    }

    // google sign in
    const googleSignIn = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // github sign in
    const githubSignIn = () => {
        setloading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // user sign out
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, 
            (currentUser) => {
                console.log('inside auth state changed', currentUser);
                setloading(false);
                setUser(currentUser)
            });
            return () => {
                unsubscribe();
            }
    },[])

    // update password
    const currentUser = auth.currentUser;
    const updateNewPassword = password => {
        return updatePassword(currentUser, password)
    };

    const authInfo = {
        createUser,
        user,
        loading,
        googleSignIn,
        githubSignIn,
        signIn,
        logOut,
        updateUserProfileData,
        updateNewPassword
    }
    return (
        <AuthContext.Provider value = {authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;