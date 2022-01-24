import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancel, setIsCancel] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    //Sign user out
    try {
      await projectAuth.signOut();

      //Dispatch logout action
      dispatch({ type: "LOGOUT" });

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

  return { logout, error, isPending };
};
