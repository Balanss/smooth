/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {style} from '../style'
import { SectionWrapper } from '../hoc'
import logo from '../assets/Image/logo.webp'
import { useViewportScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import blur from '../assets/Image/blur.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const About = () => {

const [isMobile, setIsMobile] = useState(false)
const title = "Who is Shreyaan Daga?".split("")

const [textRef, inView] = useInView({
  triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
});

const { scrollY } = useViewportScroll();

const opacity = useTransform(scrollY, [1, 500], [1, 0.8]);
const scale = useTransform(scrollY, [1, 500], [1, 0.8]);



const [ load, setLoad ] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setLoad(true)
  }, 3000);
}
,[])




useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  // Set initial value
  handleResize();

  // Update value when window size changes
  window.addEventListener('resize', handleResize);

  // Clean up event listener when component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  return (
  <>




    <motion.div className='fixed inset-0'  initial={{opacity:1}} animate={{opacity:0}}   
           transition={{
          ease: 'easeOut',
          duration: 3,
          delay: 1.5,
        }}>
      <LazyLoadImage
  alt="logo"
  src={blur}
  effect="blur"
  className="w-screen h-screen"
/>
    </motion.div>
  


<div className='w-screen  flex flex-wrap mt-[20px] flex-col items-center phones:items-start justify-center gap-10 '>

<motion.div className='h-screen flex flex-col justify-center items-center w-[80vw] m-auto phones:flex-wrap phones:flex-row phones:mt-[100px]' style={isMobile? {scale:1,opacity:1} :{scale,opacity}} initial={{ y: 50 }} animate={{y:0}}transition={{duration:1.5}}>
  <h1 className='tracking-[8px]  phones:h-fit'>  {title.map((el, i) => ( 
        <motion.span className={` relative ${style.heroHeadText} !text-white `} key={i}  ref={textRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isMobile ? 1 : (inView ? 1 : 0), y: isMobile ? 0 : (inView ? 0 : -50) }}
        transition={{ delay: i * 0.05 }}  > 
          {el}{""}
        </motion.span>
      ))} </h1>


<section className='flex items-center justify-center gap-10 relative z-[100] phones:flex-col w-[80vw]  mt-10  ' >
  <motion.div  initial={isMobile? {x:100,opacity:0} :{opacity:0,x:0}} animate={{x:0,opacity:1}} transition={{duration:1}} >
    <motion.img src={logo} alt="logo" className="w-40 h-40 rounded-full mx-auto shadow-card relative pc:left-40"  />
  </motion.div>

  <div className='w-[50vw] phones:w-[80vw]  mt-10 m-auto flex flex-col gap-y-10'>
    <motion.p className={`${style.heroSubText}  m-auto !text-white leading-loose tracking-widest `}  ref={textRef} initial={{opacity:0 , x:-50}}
     animate={{ opacity: isMobile ? 1 : (inView ? 1 : 0), x: isMobile ? 0 : (inView ? 0 : -50) }}
     transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 10 ,mass:1.5}}
     > Shreyaan Daga is a young entrepreneur who has made a name for himself in the business world.</motion.p>
    <motion.p className={`${style.heroSubText} !text-white leading-loose`} ref={textRef} initial={{opacity:0 , x:-50}}
     animate={{ opacity: isMobile ? 1 : (inView ? 1 : 0), x: isMobile ? 0 : (inView ? 0 : -50) }}
     transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 10 ,mass:1.5}}>
       His journey is a testament to his entrepreneurial spirit and dedication. Follow us through his life journey and his achievements.
       </motion.p>
  </div>
</section>

</motion.div>




    </div>

   
   

  </>
  )
}

export default SectionWrapper(About,"Life Journey") 