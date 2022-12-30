import React, { createContext, useEffect, useState} from 'react';
import  { createUserWithEmailAndPassword , getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,} from 'firebase/auth'
import app from './../../firebase/firebase.config'




export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setloading] = useState(true)

  // createuser
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // signin user

  const Signin = (email, password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout

  const LOgout = () =>{
    setloading(true)
    return signOut(auth)
  }

  useEffect(() =>{
    const Unsubscribe = onAuthStateChanged(auth, currentUser =>{

      console.log(currentUser)
      setUser(currentUser)
      setloading(false)
    })
      return ()=> Unsubscribe()
  },[])

  const userInfo = {user, createUser, Signin, LOgout, loading}
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;