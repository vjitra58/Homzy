import React, {useState} from 'react'
import style from "./styles.module.css";
import logo from "../../assets/logo.svg";
import profilePhoto from "../../assets/profile.jpg";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx"

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const popUpVariant = {
        initial : {
            scale : 0
        },
        visible : {
            scale : 1,
            transition : {
                type : "spring",
                duration : "1s",
                stiffness : "200"
            }
        }
    }

    const handleChange = ()=>{
        setIsVisible(!isVisible);
    }

  return (
    <>
        <motion.div className={style.container}
        initial={{height: "0px"}}
        animate={{height:"60px"}}
        transition={{duration: "1s", type: "spring", stiffness: 200}}
    >
        <Link to="/">
        <motion.div className={style.logo}
           variants={popUpVariant}
           initial="initial"
           animate="visible"
        >
            <img src={logo} />
            <p>Homzy</p>
        </motion.div>
        </Link>

        <motion.div className={style.links}
             variants={popUpVariant}
             initial="initial"
             animate="visible"
        >
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/search">
                <p>Search</p>
            </Link>
            <Link to="/about">
                <p>About</p>
            </Link>
        </motion.div>

        <div className={style.user}>
            <motion.div
                variants={popUpVariant}
                initial="initial"
                animate="visible"
            ><img src={profilePhoto}></img></motion.div>
            <p>Log Out</p>
        </div>

       
        {!isVisible ? (
             <button className={style.btn} onClick={handleChange}  >
             <GiHamburgerMenu />
         </button>
        ) : (
            <button className={style.btn} onClick={handleChange}>
            <RxCross2 />
            </button>
        )}
        
    </motion.div>

    {isVisible && (
        <div className={style.smallContainer}>
           
            <div className={style.list}>
                <Link to="/" onClick={handleChange}>
                    <p>Home</p>
                </Link>
            
            
                <Link to="/search" onClick={handleChange}>
                    <p>Search</p>
                </Link>
            
            
                <Link to="/about" onClick={handleChange}>
                    <p>About</p>
                </Link>
            </div>

        </div>
    )}
    
    </>
  )
}

export default Navbar