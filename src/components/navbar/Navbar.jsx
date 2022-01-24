import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import './Active.css'
import { Button, Divider } from '@chakra-ui/react'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className={styles.navbar}>
            <ul>
                <li><BsFillCreditCardFill className="text-green-500 text-2xl" /></li>
                <li className={styles.title}><Link to="/" className="text-2xl text-green-500 font-bold tracking-tight uppercase">Money</Link></li>
                {!user && (
                <>
                  <li className="font-semibold"><NavLink to="/login">Login</NavLink></li>
                  <li><Link to="/register"><Button variant='outline' colorScheme="whatsapp" >Create an account</Button></Link></li>
                </>
                )}

                {user && (
                <>
                  <li>Hello, <span className="font-bold text-green-500">{user.displayName}</span> </li>
                  <li><Button onClick={logout}>Logout</Button></li>
                </>
                )}

            </ul>
        </nav>
    )
}

export default Navbar
