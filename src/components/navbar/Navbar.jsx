import { NavLink, Link } from 'react-router-dom'
import './Active.css'
import { Button, Divider } from '@chakra-ui/react'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className="flex justify-between items-center top-0 left-0 max-h-min w-full px-16 py-8 z-30 bg-[#f8fdff] font-sans">
          <Link to="/" className="text-3xl text-green-500 font-bold tracking-tight">Finance</Link>
            <ul className="flex gap-5">
                {user && (
                <>
                  <li className="m-auto">Hello, <span className="font-bold text-green-500">{user.displayName}</span> </li>
                  <li><Button onClick={logout}>Logout</Button></li>
                </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
