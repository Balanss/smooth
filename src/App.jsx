/* eslint-disable no-unused-vars */
import './App.css'
 import { BrowserRouter } from 'react-router-dom';
import HorizontalText from './components/HorizontalText';
import { About,Hero,Navbar,StarsCanvas } from './components'



function App() {
return (
  <>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
     <HorizontalText />
     <div className='relative z-0'>
          <About />
          <StarsCanvas />
         
          </div>
      </div>
    </BrowserRouter>
  </>
)

}

export default App
