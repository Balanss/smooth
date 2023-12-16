/* eslint-disable no-unused-vars */
import {style} from "../style"
import logo from "../assets/headerLogo.jpg"


export default function Hero() {
  return (
    <section className='relative w-full h-screen '>
 <div className={`absolute inset-0 top-[120px] lg:max-w-7xl flex mx-auto flex-row items-start gap-5`}>
     <section className=" xl:flex gap-20  justify-start md:flex md:flex-col md:items-center lg:w-[80vw] ">

     <div className="xs:block">
       <h1 className={`${style.heroHeadText} text-white`}>
       Shreyaan Daga 
       </h1>
       <p className={` ${style.heroSubText}  text-white-100 mt-2 `} >
       CEO and Founder of OLL  (Online Live Learning)
         </p>
     </div>

     <div>
<img src={logo} alt="logo" className=" xs:w-[150px] lg:w-[200px] lg:h-[200px] m-auto xs:mt-10 sm:mt-0  rounded-full gradient green-pink-gradient xs:h-[150px]"/>
     </div>
     </section>

   
 
 </div>
 
    </section>
   )
}
