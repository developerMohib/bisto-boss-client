import { GoogleAuthProvider,FacebookAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const AuthCustomContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic() ;
    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update Profile
    const updateProfileUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
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
    // facebook sign in
    const loginWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }
    // log out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth) ;
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log(currentUser, ' current user')
            if(currentUser){
                const userInfo = {email : currentUser.email } ;
                // token pass
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    // console.log(res.data.token)
                    const token = res.data.token ;
                    if(token){
                        // set token in local store
                        localStorage.setItem('access-token', token)
                    }
                })
                setLoading(false)
            }
            else{
                // remove token from local store
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })
        return () => unsubscribe()
    },[axiosPublic])


    const authInfor = {
        user,
        setUser,
        loading,
        loginWithEmailPass,
        loginWithGoogle,
        loginWithFacebook,
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