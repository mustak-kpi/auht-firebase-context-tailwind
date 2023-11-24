import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../Friebase/friebase.confige';
import { useEffect } from 'react';


const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setloding] = useState(true)
    const createuser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        return signOut(auth)
    }

    const sineinwithgoogle = () =>{
      return  signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(()=>{
       const unsubcrib = onAuthStateChanged(auth, currentuser =>{
            console.log('arth stase change now', currentuser)
            setUser(currentuser)
            setloding(false)
        })
        return ()=>{
          unsubcrib();
        }

    },[])
    const authinfo = {
        user, 
        loding,
        createuser,
        singIn,
        logout,
        sineinwithgoogle
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;