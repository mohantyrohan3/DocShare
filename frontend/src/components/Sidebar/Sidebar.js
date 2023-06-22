import React from 'react'
import "./Sidebar.css"
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion"
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { removeStatus } from '../../store/slices/userSlice';




export default function Sidebar(props) {

    const user = useSelector((state)=> state.user)
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const logout =    async()=> {

      try{
          const response =  await axios.get('https://docshare.rohankm.online/api/logout',{
            withCredentials:true
          })
          console.log(response)
          dispatch(removeStatus());
          navigate('/')
      }
      catch(err){
        console.log(err)
      }



    }


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
          {
            (user.status === "Authenticated"?(
              <Link to='/user/home'> DASHBOARD</Link>
            ):(
              <Link to='/login'> LOGIN</Link>
            ))
          }
        </Typography>
        <Typography className='sidebar-content' gutterBottom>
        {
            (user.status === "Authenticated"?(
              <div style={{cursor:'pointer'}} onClick={logout}>
                LOGOUT
              </div>
            ):(
              <Link to='/register'> REGISTER</Link> 
            ))
          }
           
        </Typography>
        </motion.div>




    </motion.div>
  )
}
