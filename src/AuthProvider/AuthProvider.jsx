import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
const googleProvider = new GoogleAuthProvider();
export const AuthCustomContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)
    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update Profile
    const updateProfileUser = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
    }
    // email password login
    const loginWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // log out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth) ;
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])


    const authInfor = {
        user,
        setUser,
        loading,
        loginWithEmailPass,
        loginWithGoogle,
        createUser,
        updateProfileUser,
        logOut,
    }
    return (
        <AuthCustomContext.Provider value={authInfor}>
            {children}
        </AuthCustomContext.Provider>
    );
};

export default AuthProvider;