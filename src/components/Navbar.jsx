import {useState} from 'react'
import { Link } from 'react-router-dom'
import {navLinks} from '../constants'

export default function Navbar() {

    const [active,setActive] = useState('')
    const [toggle,setToggle] = useState('false')
  return (
    <nav className={` w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary `}>
<div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
  <Link to='/' className='flex items-center gap-2' 
  onClick={() => {setActive('');
  window.scrollTo(0,0)}}>
   
    <p className='text-white text-[18px] flex font-bold cursor-pointer'> PlaceHolder &nbsp;<span className='sm:block hidden'> |</span></p>
    </Link>
    <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map((link,index) => (
        <li key={index} className={`${active === link.title? "text-white" : "text-secondary"} hover:text-white text-[18px]font-medium cursor-pointer`}
          onClick={() => {setActive(link.title)}}>
          <a href={`#${link.id}`}> {link.title}</a>
        </li>
      ))}
    </ul>
    <div className='sm:hidden flex flex-1 justify-end items-center'>
      <div className={`${!toggle? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 my-2 min-w[140px] z-10 rounded-xl mx-4`}>
      <ul className='list-none flex justify-end items-start  flex-col gap-4'>
      {navLinks.map((link,index) => (
        <li key={index} className={`${active === link.title? "text-white" : "text-secondary"}
         font-poppins font-medium cursor-pointer text-[16px]`}
          onClick={() => {setActive(link.title);setToggle(!toggle)}}>
          <a href={`#${link.id}`}> {link.title}</a>
        </li>
      ))}
    </ul>
      </div>


    </div>
  </div>
    </nav>
  )
}
