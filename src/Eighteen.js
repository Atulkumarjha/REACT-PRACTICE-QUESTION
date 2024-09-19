//responsive navigation menu with humburger icon

import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import './styles/Eighteen.css'


const Eighteen = () => {
    const[isOpen,setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
 }  
 return (
    <div>
        <button className='menu-icon' onClick={toggleMenu}>
        <MdOutlineMenu />
        </button>
        <ul className={`menu ${isOpen?'open':''}`}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Eighteen