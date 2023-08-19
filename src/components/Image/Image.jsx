import React, {useState} from 'react'
import style from "./styles.module.css"
import {motion} from "framer-motion";


const Image = ({src, handler, index}) => {
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);
  
    const imageLoaded = () => {
      setImageLoading(false);
      setTimeout(() => setPulsing(false), 600);
    };
  
  return (
    <motion.div
    whileTap={{scale: 0.8}}
    className={`${pulsing ? style.pulse : ""} ${style.loadable}`}
    style={{ width: "100%", background: "#ccc" }}
    onClick={()=>handler(index)}
    >
    <motion.img
      initial={{ height: "100%", opacity: 0 }}
        whileHover={{scale : 1.2}}
      animate={{
        opacity: imageLoading ? 0 : 1
      }}
      transition={
        ({ opacity: { delay: 0.5, duration: 0.4 } })
      }
      onLoad={imageLoaded}
      width="100%"
      src={src}
      loading='lazy'
    />
  </motion.div>
  )
}

export default Image