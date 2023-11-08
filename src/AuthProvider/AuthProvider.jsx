/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";



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
            setAuthUser(currentUser);
            // const email=currentUser?.email || authUser?.email;
            // const loggedUser={email:email}
          
            // // console.log('logged user', loggedUser);
            // // console.log('current user', currentUser);
           
            // if(currentUser){
            //     axios.post(' http://localhost:5000/jwt', loggedUser ,{withCredentials:true})
            //     .then(res=>{
            //         console.log("token response",res.data)
            //     })
            // }
           
        })
       return()=>{
        unSubsCribe;
        setLoading(false)
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