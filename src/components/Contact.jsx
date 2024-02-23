import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import blur from '../assets/Image/blur.jpg'
import blur2 from '../assets/Image/blur2.jpg'
import { AnimatePresence } from 'framer-motion';


export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageBig, setMessageBig] = useState("");
    
    
  
    const sendToZapier = async payload => {
      const zapierURL = import.meta.env.VITE_SOME_APP;
      try {
        const response = await fetch(zapierURL, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(payload),
        });
        const resp = await response.json();
        console.log(resp);
      } catch (e) {
        console.log(e);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const leadData ={
        name: name,
        email: email,
        message: message,
        messageBig: messageBig,
      }

      try {
        sendToZapier(leadData);
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setMessageBig("");
      }
      catch (error) {
        console.log(error);
        toast.error("Something went wrong");

      }

    }


  return (
    <>
<div className='relative w-full pb-5 h-screen  mx-auto  flex flex-col gap-5 items-center justify-center  bg-cover bg-no-repeat bg-center'>
  <img src={blur} alt="logo" className="w-screen h-screen fixed  " />
<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
          <Navbar />
        </div>
            
<form className='w-full max-w-md mx-auto space-y-3 bg-[#050816] rounded-md p-10 relative z-[100000]' onSubmit={handleSubmit}>
  <h1 className='text-white text-2xl font-bold'>Contact Shreyaan Daga</h1>
        <input className='w-full p-2' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='w-full p-2' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <select className='w-full p-2' value={message} onChange={(e) => setMessage(e.target.value)}>
          <option value="">Why do you want to contact Shreyaan Daga?</option>
          <option value="event">Book him for an event</option>
          <option value="interview">Book him for an interview</option>
          <option value="business-idea">Share a business idea</option>
          <option value="business-collaboration">Business collaboration</option>
          <option value="student-advice">Student Advice</option>
          <option value="career-guidance">Career Guidance</option>
        </select>
        <textarea className='w-full p-2' placeholder='Please leave a message for Shreyaan' value={messageBig} onChange={(e) => setMessageBig(e.target.value)} />
        <motion.button className='w-full p-2 bg-secondary text-white'    whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} type='submit'>Submit</motion.button>
      </form>
</div>
      <ToastContainer /></>
  )
}
