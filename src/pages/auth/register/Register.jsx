import styles from './Register.module.css'
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
import { useRegister } from '../../../hooks/useRegister';


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const { register, pending, error } = useRegister()

    const submitForm = (event) => {
        event.preventDefault()
        register(email, password, username)
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <form onSubmit={submitForm} className={styles["register-form"]}>
                <h1 className="text-center text-lg font-semibold">Register To Start Saving!</h1>
                {error && <p className="text-red-500 w-full">{error}</p>}
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                    <FormHelperText>We'll never share your email with anyone else.</FormHelperText>

                    <FormLabel>Username</FormLabel>
                    <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <FormHelperText>{username}</FormHelperText>

                    <FormLabel>Password</FormLabel>
                    <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="flex justify-end items-center">
                        {!pending && <Button className="mt-4 text-center" type="submit" colorScheme="whatsapp" variant="outline">Register</Button>}
                        {pending && <Button className="mt-4 block" colorScheme="whatsapp" variant="outline" isLoading>Loading</Button>}
                    </div>
                </FormControl>
            </form>
        </HelmetProvider>

    )
}

export default Register
