import React from 'react'
import '../style/NavbarStyle.css'
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <div>
        <nav>
            <ul className='navbar'>
                <li><a href="">CHANGE COUNTRY <FiChevronDown size={25}/></a></li>
                <li><a href="">TEST DRIVE</a></li>
                <li className='logo'><a href="">VESLA</a></li>
                <li className='right'><a href="">LOGIN</a></li>
                <li className='right'><a href="">REGISTER</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar