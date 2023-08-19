import React, {useState, useEffect} from 'react'
import style from "./styles.module.css"
import Image from "../Image/Image.jsx";
import Modal from "react-modal";
import {BiExitFullscreen} from "react-icons/bi";
import { AnimatePresence, motion } from 'framer-motion';

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(0, 0, 0, 0.5)",
      width: "100vw",
      display: "flex",
        height: "100vh",
      padding: "0",
    },
  };
  

const ImageDisplay = ({photos}) => {
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    const handleImageTap = (index) => {
        console.log("tapped image ", index);
        setSelected(index);
        setOpen(true);
    };
    
    const handleCloseModal = () => {
        setSelected(null);
        setOpen(false);
    };

  return (
    <div className={style.container}>
        <div className={style.grid_container}>
            {data?.map((photo, key)=>
               <Image src={photo.url} key={key} index={key} 
                    handler={handleImageTap}
               />
            )}
        </div>

        <AnimatePresence

        >
            {selected !== null && (
                <Modal 
                isOpen={open}
                onRequestClose={handleCloseModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    <motion.div className={style.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={style.close} onClick={handleCloseModal}>
                        <BiExitFullscreen style={{fontSize: "2rem"}} />
                        </div>

                        <motion.div className={style.imageContainer}
                           
                        >
                            <img src={data[selected].url}/>
                        </motion.div>
                        
                    </motion.div>
                </Modal>
            )}
        </AnimatePresence>

    </div>
  )
}

export default ImageDisplay

const data = [
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/0ad93bb9c447241713afd25031dfe4bc-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/ecf8e6609d6ee7b42d10de9f10b23c65-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
    {url : "https://photos.zillowstatic.com/fp/dd6de65175511b6bddd652e4c8905c8e-cc_ft_1536.jpg"},
]
