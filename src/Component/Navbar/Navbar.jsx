import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowUpRight} from 'react-icons/hi2'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to='/'>
                Logo
            </Link>
        </div>
        <ul className='navLink'>
            <Link to='/Exploration'>Exploration</Link>
            <Link to='/Recomendation'>Recomendation</Link>
            <Link to='/About'>About</Link>
        </ul>
        <div>
            <button className='getStarted'>Get Started <HiOutlineArrowUpRight/></button>
        </div>
    </div>
  )
}

export default Navbar