import {
    FormControl,
    label,
    FormErrorMessage,
    span,
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
            <form onSubmit={submitForm} className="font-sans pt-10">
                <h1 className="text-center text-2xl font-semibold">Register To Start Saving!</h1>
                {error && <p className="text-red-500 w-full">{error}</p>}
                <div className="flex flex-col max-w-xl m-auto pt-5">
                    <label>Email address</label>
                    <input type="email"  className="border-2 h-10 border-lightText/50 rounded-md pl-2" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                    <span className="mb-6 text-sm text-gray-500 tracking-tight">We'll never share your email with anyone else.</span>

                    <label>Name</label>
                    <input type="text" className="border-2 h-10 border-lightText/50 rounded-md pl-2 mb-6" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <span>{username}</span>

                    <label>Password</label>
                    <input type="password" className="border-2 h-10 border-lightText/50 rounded-md pl-2 mb-6" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="flex justify-end items-center">
                        {!pending && <Button className="mt-4 text-center" type="submit" colorScheme="whatsapp" variant="outline">Register</Button>}
                        {pending && <Button className="mt-4 block" colorScheme="whatsapp" variant="outline" isLoading>Loading</Button>}
                    </div>
                </div>
            </form>
        </HelmetProvider>

    )
}

export default Register
