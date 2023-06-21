import React from 'react'
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
        <Grid container spacing={2} alignItems={'center'}>

                {/* SideBar */}
                <Grid item xs={2} justifyItems="center" alignItems="center">
                    <MenuIcon sx={{cursor:'pointer'}} onClick={()=>{console.log('Hello')}}/>
                </Grid>
                
                {/* Title  */}
                <Grid item xs={8} justifyItems="center" alignItems="center" sx={{textAlign:'center'}} className='navbar-title'>
                    DOCSHARE
                </Grid>
        </Grid>
    
    
    </>
  )
}
