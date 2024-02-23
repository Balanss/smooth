import {useState} from 'react'
import { Link } from 'react-router-dom'
import {navLinks} from '../constants'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'


export default function Navbar() {

    const [active,setActive] = useState('')
    const [toggle,setToggle] = useState(false)
  return (
    <nav className={` w-screen  flex items-center py-5 fixed top-0 left-0 z-20 bg-primary `}>
<div className='w-full flex items-center xs:w-[80vw] phones:px-4 xs:justify-around justify-between max-w-7xl mx-auto'>
  <Link to='/' className='flex items-center gap-2' 
  onClick={() => {setActive('');
  window.scrollTo(0,0)}}>
   
    <img src={logo} alt='logo' className='w-10 h-10'/>
    </Link>
    <ul className='sm:flex flex-row gap-10'>
      {navLinks.map((link,index) => (
        <li key={index} className={`${active === link.title? "text-white" : "text-secondary"} hover:text-white text-[18px]font-medium cursor-pointer`}
          onClick={() => {setActive(link.title)}}>
     <Link to='/contact'>Contact Shreyaan Daga</Link>
        </li>
      ))}
    </ul>
    {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
    <img src={toggle ? close:menu} alt='menu' className='w-5 h-5 cursor-pointer' onClick={() => {setToggle(!toggle)}}/>
      <div className={`${!toggle? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 my-2 min-w[140px] z-10 rounded-xl mx-4`}>
      <ul className='list-none flex justify-end items-start  flex-col gap-4'>
      {navLinks.map((link,index) => (
        <li key={index} className={`${active === link.title? "text-white" : "text-secondary"}
         font-poppins font-medium cursor-pointer text-[16px]`}
          onClick={() => {setActive(link.title);setToggle(!toggle)}}>
            <Link to='/contact'>Contact Shreyaan Daga</Link>
        </li>
      ))}
    </ul>
      </div>


    </div> */}
  </div>
    </nav>
  )
}


