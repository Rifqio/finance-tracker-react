import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import './Active.css'
import { Button, Divider } from '@chakra-ui/react'
import { BsFillCreditCardFill } from 'react-icons/bs'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><BsFillCreditCardFill className="text-green-500 text-2xl" /></li>
                <li className={styles.title}><Link to="/" className="text-2xl text-green-500 font-semibold uppercase">Money</Link></li>
                <li className="font-semibold"><NavLink to="/login">Login</NavLink></li>
                <li><Link to="/register"><Button variant='outline' colorScheme="whatsapp" >Create an account</Button></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
