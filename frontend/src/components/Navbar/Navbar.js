import React from 'react'
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar-body'>
        <Grid container spacing={2} >

                {/* SideBar */}
                <Grid item xs={2} justifyItems="center" alignItems="center">
                    <MenuIcon sx={{cursor:'pointer', marginLeft:'1rem'}} onClick={()=>{console.log('Hello')}}/>
                </Grid>
                
                {/* Title  */}
                <Grid item xs={8} justifyItems="center" alignItems="center" sx={{textAlign:'center'}} className='navbar-title'>
                    DOCSHARE
                </Grid>
        </Grid>
    
    
    </div>
  )
}
