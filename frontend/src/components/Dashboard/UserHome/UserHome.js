import React, { useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography, Grid, Box, Modal, Input, FormControl } from '@mui/material'
import './UserHome.css'
import Navbar from "../../Navbar/Navbar"
import { UploadOutlined } from '@ant-design/icons';
import {Upload } from 'antd';
import FileUploadIcon from '@mui/icons-material/FileUpload';


const UserHome = () => {
    const [fname, setfname] = useState("");
    const [file, setfile] = useState(null);
    const [modal, setmodal] = useState(false);
    const handleClose = () => setmodal(false);

    const handlesubmit = (e)=>{
        e.preventDefault();
        const data = {
            filename:fname,
            file
        }


        setfile(null);
        setfname('')
        setmodal(false)

        console.log(data)
    }








    
    return (
        <>
          <div className='dash-body'>
            <Navbar/>

            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={10} sm={9} md={4} lg={4} xl={3}>
            
                <Button onClick={() => setmodal(true)}  disableFocusRipple fullWidth  className='dashboard-btn' size="medium">UPLOAD A FILE</Button>


                    <Modal
                    open={modal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box className='modal'>
                    <Typography className='modal-text' sx={{marginBottom:'1rem'}} variant="h6" component="h2">
                            UPLOAD FILE
                    </Typography>     

                            <form onSubmit={handlesubmit}>
                              
                            
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="FILE NAME"
                                     required={true}
                                     value={fname}
                                     className='dashboard-input'
                                     onChange={(e)=> setfname(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>

                            <FormControl fullWidth>

                            <Upload.Dragger
                            beforeUpload={(file)=>{
                                return false
                            }}
                            onChange={(e)=> setfile(e.file)}
                            listType='picture-card' maxCount={1} style={{marginTop:'1rem'}}>
                                <Button style={{margin:0}} startIcon={< FileUploadIcon/>} className='dashboard-btn-modal'>Click to Upload</Button>
                            </Upload.Dragger>
                            {/* <input type="file" onChange={(e)=> setfile(e.target.files[0])} /> */}



                            </FormControl>
                            <Button size="medium" fullWidth className='dashboard-btn' type='submit'>UPLOAD</Button>
                          
                            </form>

                            </Box>
                        </Modal>
                            </Grid>
                        </Grid>



           </div>
        </>

    )
}

export default UserHome