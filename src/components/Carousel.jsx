import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";
import img5 from "../assets/image/img5.jpg";
import img6 from "../assets/image/img6.jpg";
import { Tilt } from "react-tilt";
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/Motion";



const Carousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4,5]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

const images = [
  { name: "city1", id: 0,src:img1,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat eu ante quis cursus. Cras tortor metus, tincidunt sed vestibulum.' },
  { name: "city2", id: 1,src:img2 , title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat eu ante quis cursus. Cras tortor metus, tincidunt sed vestibulum.'},
  { name: "city3", id: 2,src:img3 ,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat eu ante quis cursus. Cras tortor metus, tincidunt sed vestibulum.'},
  { name: "planet1", id: 3,src:img4,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat eu ante quis cursus. Cras tortor metus, tincidunt sed vestibulum.' },
  { name: "planet2", id: 4,src:img5,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat eu ante quis cursus. Cras tortor metus, tincidunt sed vestibulum.' },
  { name: "planet3", id: 5,src:img6 ,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat eu ante quis cursus. Cras tortor metus, tincidunt sed vestibulum.'},
];

  const positions = ["center", "left1", "left", "right", "right1", "center1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1,transition: { delay: 0.3, duration: 0.5 } },
    center1: { x: "0%", scale: 0, zIndex: 5, opacity: 0 , transition: { delay: 0.1 }},
    left1: { x: "-50%", scale: 0.7, zIndex: 3, opacity: 0.4, transition: { delay: 0.1 } },
    left: { x: "-90%", scale: 0.5, zIndex: 2, opacity: 0.2, transition: { delay: 0.1 } },
    right: { x: "90%", scale: 0.5, zIndex: 1, opacity: 0.4, transition: { delay: 0.1 } },
    right1: { x: "50%", scale: 0.7, zIndex: 3, opacity: 0.2, transition: { delay: 0.1 } },
    
  };


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return ( <>

  

    <motion.div variants={textVariant()} className="flex items-center flex-col justify-center w-screen h-[750px]">
   
    {images.map((image, index) => (
      <motion.div
        key={index}
        className="rounded-md bg-secondary text-white shadow-card absolute"
        initial="center"
        animate={positions[positionIndexes[index]]}
        variants={imageVariants}
        transition={{ duration: 0.5 }}>
       <motion.section variants={container} >

<motion.div variants={item}>
 <Tilt >

  <div className="max-w-sm bg-white   dark:bg-gray-800 dark:border-gray-700"  > 
        <img className="" src={image.src} alt="" />
      
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{image.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{image.title}.</p>
        
    </div>
</div>
  

 </Tilt>


  
   </motion.div>
       </motion.section>
      </motion.div>
    ))}
    <div className="flex flex-row relative top-20 gap-3">
      <motion.button  
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
        onClick={handleBack}
      >
        Back
      </motion.button>
      <motion.button
       
       whileHover={{ scale: 1.1 }}
       transition={{ type: "spring", stiffness: 400, damping: 10 }}
    
        className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
        onClick={handleNext}
      >
        Next
      </motion.button>
    </div>
  
  </motion.div>
   
  </> );
};

export default SectionWrapper(Carousel,"Story");