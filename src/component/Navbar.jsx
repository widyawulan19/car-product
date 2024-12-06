import React from 'react'
import '../style/NavbarStyle.css'
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <div>
        <nav>
            <ul className='navbar'>
<<<<<<< HEAD
                <li><a href="">CHANGE COUNTRY <FiChevronDown size={25}/></a></li>
                <li><a href="">TEST DRIVE</a></li>
                <li className='logo'><a href="">VESLA</a></li>
                <li className='right'><a href="">LOGIN</a></li>
                <li className='right'><a href="">REGISTER</a></li>
=======
              <li>CHANGE COUNTRY <FiChevronDown size={25}/></li>
                <li>TEST DRIVE</li>
                <li className='logo'>VESLA</li>
                <li className='right'>LOGIN</li>
                <li className='right'>REGISTER</li>
>>>>>>> 02b6f5e (update 6 des)
            </ul>
        </nav>
    </div>
  )
}

export default Navbar