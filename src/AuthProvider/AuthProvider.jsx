/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [loader, setLoading] = useState(true)
    const [authUser, setAuthUser] = useState()

    //user create SignUp page
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login page

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google login
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // onAuth state changed
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
           
            const email=currentUser?.email || authUser?.email;
            const loggedUser={email:email}
            setAuthUser(currentUser);
            console.log('logged user', loggedUser);
            console.log('current user', currentUser);
            setLoading(false)
            if(currentUser){
                axios.post(' http://localhost:5000/jwt', loggedUser ,{withCredentials:true})
                .then(res=>{
                    console.log("token response",res.data)
                })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
           
        })
       return()=>{
        unSubsCribe;
       
       }

    }, [])

   // log out
   const userLogOut = () => {
    setLoading(true)
    return signOut(auth)
}

    const userInfo = {
        createUser,
        userLogin,
        loader,
        authUser,
        userLogOut,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;