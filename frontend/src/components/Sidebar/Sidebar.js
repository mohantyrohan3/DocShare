import React from 'react'
import "./Sidebar.css"
import CloseIcon from '@mui/icons-material/Close';




export default function Sidebar(props) {

    const handleclick = ()=>{
        props.setsidebar(false)
    }



  return (
    <div className='sidebar'>
      <CloseIcon onClick={handleclick} sx={{color:'white'}}/>
    </div>
  )
}
