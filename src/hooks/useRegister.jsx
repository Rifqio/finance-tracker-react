import { useState } from "react"
import { projectAuth } from "../firebase/Config"

export const useRegister = () => {
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  const register = async (email, password, username) => {
    setError(null)
    setPending(true)

    try {
      //Signup
      const res = await projectAuth.createUserWithEmailAndPassword( email, password )
      console.log(res.user)

      if (!res) {
        throw new Error("Registration error")
      }

      //Add username
      await res.user.updateProfile({ displayName: username })

      setPending(false)
      setError(null)

    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setPending(false)
    }
  }

  return { error, pending, register }
}
