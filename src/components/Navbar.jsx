import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFilePersonFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const[nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between text-center px-4 bg-[grey] text-white-300'>
        <div>
         <img src={logo} alt="Logo Image" style={{width:'80px'}}></img>
        </div>
        { /*menu */}      
        <ul className='hidden md:flex'>
          <li>
          <Link  to="home" smooth={true} duration={500} >
          Home
          </Link>
          </li>
          <li>
          <Link  to="about" smooth={true} duration={500} >
          About
          </Link>
          </li>
          <li>
          <Link  to="skills" smooth={true} duration={500} >
          Skills
          </Link>
          </li>
          <li>
          <Link  to="work" smooth={true} duration={500} >
          Work
          </Link>
          </li>
          <li>
          <Link  to="contact" smooth={true} duration={500} >
          Contact
          </Link>
          </li>           
        </ul>
     
        {/* hamburger */}
        <div onClick = {handleClick} className='md:hidden z-10'>
            <FaBars></FaBars>
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300'}>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
          </Link></li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
          </Link></li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
          </Link></li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500} >
          Work
          </Link></li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
          </Link>
          </li>
            
        </ul>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-white' href='/'>
            LinkedIn <FaLinkedin size={30}/>
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-white' href='/'>
            Github <FaGithub size={30}/>
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-300'>
          <a className='flex justify-between items-center w-full text-white' href='/'>
            Email <HiOutlineMail size={30}/>
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
          <a className='flex justify-between items-center w-full text-white' href='/'>
            Resume <BsFillFilePersonFill size={30}/>
          </a>
          </li>
        </div>
    </div>
  )
}

export default Navbar

