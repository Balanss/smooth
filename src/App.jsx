/* eslint-disable no-unused-vars */
import './App.css'
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import { motion } from 'framer-motion';
import MotionSwitch from './components/MotionSwitch';





function App() {




return (
  <>
<BrowserRouter>
  <MotionSwitch>
    <Route path='/' element={
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Home />
      </motion.div>
    } />
    <Route path='/contact' element={
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Contact />
      </motion.div>
    } />
  </MotionSwitch>
</BrowserRouter>
  </>
)

}

export default App
