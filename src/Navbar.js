import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink exact to='/dogs'> Dogs </NavLink>
            <NavLink exact to='/colors'> Colors </NavLink>
        </nav>
    )
}

export default Navbar;