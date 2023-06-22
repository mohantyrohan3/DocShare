import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
import Sidebar from '../Sidebar/Sidebar';
import {AnimatePresence} from "framer-motion";



export default function Navbar() {

  const [sidebar, setsidebar] = useState(false);
  const handleclick = ()=>{
    setsidebar(true)
  }

  return (

    <div className='navbar-body'>

        <AnimatePresence>
        {
          sidebar && (<Sidebar setsidebar={setsidebar}  />)
        }
        </AnimatePresence>


        <Grid container spacing={2} alignContent={'center'} >

                {/* SideBar */}
                <Grid item xs={2} justifyItems="center" alignItems="center">
                    <MenuIcon onClick={handleclick} sx={{cursor:'pointer', marginLeft:'1rem' , marginTop:'0.6rem'}}/>
                </Grid>
                
                {/* Title  */}
                <Grid item xs={8} justifyItems="center" sx={{textAlign:'center'}} className='navbar-title'>
                    DOCSHARE
                </Grid>
        </Grid>
    
    
    </div>
  )
}
