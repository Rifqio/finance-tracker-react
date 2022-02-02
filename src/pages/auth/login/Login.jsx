import styles from "./Login.module.css";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLogin } from "../../../hooks/useLogin";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const submitForm = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="h-fit ">
      <form onSubmit={submitForm} className="font-sans pt-10">
        <h1 className="text-center text-2xl text-darkText font-semibold mb-8">
         Sign In
        </h1>
        {error && <p>{error}</p>}
        <div className="flex flex-col max-w-xl justify-center m-auto">
          <label htmlFor="email" className="text-darkText">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 h-10 border-lightText/50 rounded-md pl-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          />

          <label className="text-darkText">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 h-10 border-lightText/50 rounded-md pl-2 shadow-sm"
          />

          <div className="flex justify-between items-center">
            <h1 className="flex justify-start font-semibold">Don't have account? <span className="font-normal text-green-600 hover:text-green-400 underline pl-2"><Link to="/register">Register now</Link></span></h1>
            {!isPending && (
              <Button
                className="mt-4 text-center"
                type="submit"
                colorScheme="whatsapp"
                variant="outline"
              >
                Login
              </Button>
            )}
            {isPending && (
              <Button
                className="mt-4 block"
                colorScheme="whatsapp"
                variant="outline"
                isLoading
              >
                Loading
              </Button>
            )}
          </div>
        </div>
      </form>
      </div>
    </HelmetProvider>
  );
}

export default Login;
