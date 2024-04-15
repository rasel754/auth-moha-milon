import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
    const [loading , setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    }


    const createUser =(email,password)=>{
        setLoading(true )
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth , currentUser=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)

                console.log('observing current user inside useEffect of auth provider',currentUser)
            }
        });
        return () => {
            unSubscribe(auth);
        }
    },[])
    
    const authInfo = {user, createUser ,signInUser,logOut,loading,signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children:PropTypes.node
}