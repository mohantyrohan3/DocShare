import React from 'react'
import "./Sidebar.css"
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion"
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

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


        <motion.div
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.75,duration:0.5}}
        
        className='sidebar-div'> 
        <Typography className='sidebar-content' gutterBottom>
           <Link to='/'>HOME</Link> 
        </Typography>
        <Typography className='sidebar-content' gutterBottom>
            LOGIN
        </Typography>
        <Typography className='sidebar-content' gutterBottom>
            REGISTER
        </Typography>
        </motion.div>




    </motion.div>
  )
}
