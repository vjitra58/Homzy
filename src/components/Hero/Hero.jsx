import React from 'react'
import style from "./styles.module.css";
import {motion} from "framer-motion";
import {BsChevronDown} from "react-icons/bs";
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate();
  const containerVariant = {
    initial : {
      opacity: 0
    },
    animate : {
      opacity: 1,
      transition : {
        type : "spring",
        duration : 1,
        stiffness : 50,
        when : "beforeChidren"
      }
    }
  }

  const childVariant = {
    initial : {
      scale : 0
    },
    animate : {
      scale : 1
    },
    transition:{
      type: "spring",
      stiffness : 300,
      delay: 2,
      duration : 2
    } 
  }

  return (
    <motion.div className={style.container}
      variants={containerVariant}
      initial="initial"
      animate="animate"
    >
      <motion.div className={style.content}  
        variants={childVariant}
      >
        <motion.div className={style.slogan}
          
        >
          <p className={style.heading}>
            Find Your New Home
          </p>
          <p className={style.subHeading}>
            One Stop Solution To All Your Problems
          </p>
        </motion.div>

      </motion.div>

      <motion.div className={style.downArrow}
         animate={{ y: [-10, 10, -10] }} // Y-axis movement values
         transition={{
           duration: 2,
           repeat: Infinity, // Repeat the animation indefinitely
           repeatType: "loop", // Loop back and forth
         }}
         onClick={()=>navigate("/search")}
      >
        <BsChevronDown />
      </motion.div>

    </motion.div>
  )
}

export default Hero