import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import {style} from "../style"
import {useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';




export default function Footer() {

    const navigate = useNavigate()

  const handleGo = () => {
    navigate('/contact')
  }


  return (
    <div className='relative w-full text-center p-5  mx-auto bg-primary flex flex-col gap-5 items-center justify-center'>
      <h1 className={`${style.heroHeadText} !text-xl mt-10 !font-light`}>Wish to Contact Shreyaan Daga?</h1>
      <motion.button className='w-1/3 p-2  bg-secondary text-white'   whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }} onClick={handleGo}>Contact</motion.button>

    </div>
  );


}
