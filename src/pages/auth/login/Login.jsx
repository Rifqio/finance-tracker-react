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
      <form onSubmit={submitForm} className={styles["login-form"]}>
        <h1 className="text-center text-lg font-semibold">
          Login To Continue!
        </h1>
        {error && <p>{error}</p>}
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end items-center">
            {!isPending && <Button
              className="mt-4 text-center"
              type="submit"
              colorScheme="whatsapp"
              variant="outline">
              Login
            </Button>}
            {isPending && <Button className="mt-4 block" colorScheme="whatsapp" variant="outline" isLoading>Loading</Button>}
          </div>
        </FormControl>
      </form>
    </HelmetProvider>
  );
}

export default Login;
