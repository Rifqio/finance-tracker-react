import styles from "./Login.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event) => {
      event.preventDefault()
      console.log(email, password)
  }

  return (
    <HelmetProvider>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <form onSubmit={submitForm} className={styles["login-form"]}>
        <h1 className="text-center text-lg font-semibold">Login To Continue!</h1>
        <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="flex justify-end items-center">
                <Button className="mt-4 text-center" type="submit" colorScheme="whatsapp" variant="outline">Login</Button>
            </div>
        </FormControl>
        </form>
    </HelmetProvider>
  );
}

export default Login;
