import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/Config"
import { useAuthContext } from './useAuthContext'

export const useRegister = () => {
  const [isCancel, setIsCancel] = useState(false)
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)
  const { dispatch } = useAuthContext()

  const register = async (email, password, username) => {
    setError(null)
    setPending(true)

    try {
      //Signup
      const res = await projectAuth.createUserWithEmailAndPassword( email, password )

      if (!res) {
        throw new Error("Registration error")
      }

      //Add username
      await res.user.updateProfile({ displayName: username })

      //Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if(!isCancel){
        setPending(false)
        setError(null)
      }
    } 
    catch (err) {
      if(!isCancel){
        console.log(err.message)
        setError(err.message)
        setPending(false)
      }
    }
  }
  useEffect(() => {
    return () => setIsCancel(true)
  }, []) 

  return { error, pending, register }
}
