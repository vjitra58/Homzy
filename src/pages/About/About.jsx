import React from 'react'
import style from "./styles.module.css";
import img1 from "../../assets/flat-4.jpg";
import img2 from "../../assets/flat-6.jpg";
import img3 from "../../assets/flat-7.jpg";
import Image from '../../components/Image/Image';
import {delay, motion} from "framer-motion";

const About = () => {

    const imageVariant = {
        initial :{
            opacity: 0,
            scale: 0
        },
        visible : {
            opacity : 1,
            scale: 1,
            transition: {
                type : "spring",
                stiffness : "150",
                duration : "4s",
                // delay : "2s"
            }
        }
    }

    const textVariant = {
        initial :{
            x : "100vw",
            opacity: 0,
        },
        visible : {
            opacity : 1,
            x : 0,
            transition: {
                type : "spring",
                stiffness : "50",
                duration : "2s"

            }
        }
    }


  return (
    <div className={style.container}>
       <section className={style.section}>
            <motion.div className={style.text}
                variants={textVariant}
                initial="initial"
                animate="visible"
            >
                <h2>What We Do</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex natus quos consectetur nihil fugiat corporis possimus cupiditate voluptatibus 
                    tempore sit, doloremque enim ullam unde assumenda laudantium, reiciendis, animi ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex natus quos consectetur nihil fugiat corporis possimus cupiditate voluptatibus 
                    tempore sit, doloremque enim ullam unde assumenda laudantium, reiciendis, animi ipsum.
                </p>
            </motion.div>
            <motion.div className={style.photo}
                variants={imageVariant}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8}}
                
            >
                <Image src={img1} />
            </motion.div>
       </section>
       {/* section 2 */}
       <section className={style.section}>
            <motion.div className={style.text}
                variants={textVariant}
                initial="initial"
                animate="visible"
            >
                <h2>How we Do</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex natus quos consectetur nihil fugiat corporis possimus cupiditate voluptatibus 
                    tempore sit, doloremque enim ullam unde assumenda laudantium, reiciendis, animi ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex natus quos consectetur nihil fugiat corporis possimus cupiditate voluptatibus 
                    tempore sit, doloremque enim ullam unde assumenda laudantium, reiciendis, animi ipsum.
                </p>
            </motion.div>
            <motion.div className={style.photo}
                variants={imageVariant}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8}}
            >
                <Image src={img2} />
            </motion.div>
       </section>
       {/* section 3 */}
       <section className={style.section}>
            <motion.div className={style.text}
                variants={textVariant}
                initial="initial"
                animate="visible"

            >
                <h2>Company Background</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex natus quos consectetur nihil fugiat corporis possimus cupiditate voluptatibus 
                    tempore sit, doloremque enim ullam unde assumenda laudantium, reiciendis, animi ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex natus quos consectetur nihil fugiat corporis possimus cupiditate voluptatibus 
                    tempore sit, doloremque enim ullam unde assumenda laudantium, reiciendis, animi ipsum.
                </p>
            </motion.div>
            <motion.div className={style.photo}
                variants={imageVariant}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8}}
            >
                <Image src={img3} />
            </motion.div>
       </section>

    </div>
  )
}

export default About