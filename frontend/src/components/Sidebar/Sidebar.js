import React from 'react'
import "./Sidebar.css"
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion"



export default function Sidebar(props) {

    const handleclick = ()=>{
        props.setsidebar(false)
    }



  return (
    <motion.div
    initial={{opacity:0,x:'-100%'}}
    animate={{opacity:0.9,x:'0'}}
    exit={{opacity:0 , x:'-100%'}}
    transition={{duration:0.75}}

    className='sidebar'>
      <CloseIcon className='close-icon' fontSize='large' onClick={handleclick} sx={{color:'white'}}/>
    </motion.div>
  )
}
