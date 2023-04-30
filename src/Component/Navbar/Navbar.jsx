import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowUpRight} from 'react-icons/hi2'
import {TbMenu} from "react-icons/tb"
import Logo from  "../../Assets/_logo/_logo/_logo_1x.webp"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex max-sm:w-full max-sm:relative max-sm:items-center max-sm:justify-center'>
            <Link to='/' className=''>
                <img src={Logo} alt="" />
            </Link>
            <button className='text-[24px] absolute right-0  sm:hidden '><TbMenu/></button>
        </div>
        <ul className='flex gap-6 max-sm:hidden'>
            <Link to='/Exploration' className='subtitle1 text-[#4E5568] font-normal hover:text-[#2257DF]'>Exploration</Link>
            <Link to='/Recomendation' className='subtitle1 text-[#4E5568] font-normal hover:text-[#2257DF]'>Recomendation</Link>
            <Link to='/About' className='subtitle1 text-[#4E5568] font-normal hover:text-[#2257DF]'>About</Link>
        </ul>
        <div>
            <button className='flex items-center gap-[10px] px-6 py-3 border bg-[#161C2D] text-white rounded-[27px] max-sm:hidden'>Get Started <HiOutlineArrowUpRight/></button>
          
        </div>
    </div>
  )
}

export default Navbar