import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowUpRight} from 'react-icons/hi2'
import Logo from  "../../Assets/_logo/_logo/_logo_1x.webp"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
        </div>
        <ul className='flex gap-6'>
            <Link to='/Exploration'>Exploration ASASSA</Link>
            <Link to='/Recomendation'>Recomendation</Link>
            <Link to='/About'>About</Link>
        </ul>
        <div>
            <button className='flex items-center'>Get Started <HiOutlineArrowUpRight/></button>
        </div>
    </div>
  )
}

export default Navbar