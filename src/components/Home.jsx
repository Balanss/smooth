
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import Story from './Story'



export default function Home() {



  return (
    <div className='relative z-0 bg-primary'>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
            
        <div className='relative z-[-1]'>
          <About />  
        </div>

        <div>
        <Story />
        </div>

        <div className='relative z-0'>
          <Footer /> 
        </div>




  </div>
  )
}
