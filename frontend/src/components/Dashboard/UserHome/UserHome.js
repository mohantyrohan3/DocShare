import React, { useState , useEffect } from 'react'
import { Button, Typography, Grid, Box, Modal, Input, FormControl, Container } from '@mui/material'
import './UserHome.css'
import Navbar from "../../Navbar/Navbar"
import {Upload } from 'antd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {fileuploadApi} from "../../../api/fileuploadapi"
import axios from 'axios';
import UserHomeCard from './UserHomeCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const UserHome = () => {
    const [fname, setfname] = useState("");
    const [file, setfile] = useState(null);
    const [modal, setmodal] = useState(false);
    const handleClose = () => setmodal(false);
    const [list, setlist] = useState([]);
    const [load, setload] = useState(true);
    const [open, setOpen] = useState(false);

    const handleCloseBar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };






    const handlesubmit = async (e)=>{
        e.preventDefault();
        
        if(!file){
            console.log('No file')
            return;
        }
        setmodal(false);
        setload(true);
        const data = {
            filename:fname,
            file:file
        }

        try{
            const response = await fileuploadApi(data);
            setOpen(true)
            get_files()
        }

        catch(err){
            console.log(err)
        }

        
        setfile(null);
        setfname('')
    }


    const get_files = async ()=>{
        setload(true)
        try{
          const response = await axios.get('https://docshare.rohankm.online/api/file/get_files',{
            withCredentials:true
          })
          let temp = response.data.files.map((data)=>{
            return(
              <UserHomeCard data = {data}  getFile = {get_files}/>
            )
          })
          setlist(temp)
          setload(false)
        }
    
        catch(err){
          console.log(err)
        }
    
        setload(false)
      }
    


    useEffect(() => {
        get_files();
      }, []);



    return (
        <>
          <div className='dash-body'>
            <Navbar/>

            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={load}
            >
            <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar vertical= 'top'
            horizontal= 'right' open={open} autoHideDuration={3000} onClose={handleCloseBar}>
                <Alert onClose={handleCloseBar} severity="success" sx={{ width: '100%' , background:'#388e3c' ,color:'white'}}>
                Successfully Uploaded
                </Alert>
            </Snackbar>


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
                        <Grid  container spacing={2} justifyContent="center">
                            {list}
                        </Grid>
                    
                    </Container>

           </div>
        </>

    )
}

export default UserHome