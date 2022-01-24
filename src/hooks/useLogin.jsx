import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancel, setIsCancel] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    //Sign user out
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      //Dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      //Update State
      if (!isCancel) {
        setIsPending(false);
        setError(null);
      }
    } 
    
    catch (err) {
      if (!isCancel) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancel(true);
  }, []);

  return { login, error, isPending };
};
