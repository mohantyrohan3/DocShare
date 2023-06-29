import React, { useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography, Grid, Box, Modal, Input, FormControl, Container } from '@mui/material'
import './UserHome.css'
import Navbar from "../../Navbar/Navbar"
import { UploadOutlined } from '@ant-design/icons';
import {Upload } from 'antd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {fileuploadApi} from "../../../api/fileuploadapi"
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const UserHome = () => {
    const [fname, setfname] = useState("");
    const [file, setfile] = useState(null);
    const [modal, setmodal] = useState(false);
    const handleClose = () => setmodal(false);

    const handlesubmit = async (e)=>{
        e.preventDefault();

        if(!file){
            console.log('No file')
            return;
        }


        const data = {
            filename:fname,
            file:file
        }

        try{
            const response = await fileuploadApi(data)
            console.log(response)
        }

        catch(err){
            console.log(err)
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

                            <form onSubmit={handlesubmit} method='post' encType="multipart/form-data">
                              
                            
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
                            </FormControl>

                            <Button size="medium" fullWidth className='dashboard-btn' type='submit'>UPLOAD</Button>
                          
                            </form>

                            </Box>
                        </Modal>
                            </Grid>
                        </Grid>



                        <Container style={{marginTop:'1rem'}}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={9} md={6} lg={6} xl={4}>
                            <Card  className='dash-card'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' , textAlign:'center' }}>
                                        File Name
                                    </Typography>

                                </CardContent>
                                <CardActions>

                                    <div style={{width:'100%' , display:'flex' , justifyContent:'space-evenly' , marginBottom:'1rem'}} >
                                    <Button size="medium"  className='dashboard-btn-card' startIcon={<RemoveRedEyeIcon/>}></Button>

                                    <Button size="medium" className='dashboard-btn-card'  startIcon={<ShareIcon/>}>
                                        
                                    </Button>
                                    <Button size="medium" className='dashboard-btn-card' startIcon={<DeleteIcon/>}>
                                        
                                    </Button>
                                    </div>

                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    </Container>

















           </div>
        </>

    )
}

export default UserHome