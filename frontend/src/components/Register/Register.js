import React, { useState } from 'react';
import './Register.css'
import Navbar from '../Navbar/Navbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import {registerApi} from "../../api/registerapi"










const Register = () => {

    const navigate= useNavigate()
    const [success, setsuccess] = useState(false);
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");


    const handleClick = () => {
    setsuccess(true);
  };

    const handleClose = (event) => {
    setsuccess(false);
  };


    //input change functions
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email:email,
            username:username,
            password:password
        }

        try{
            const response  = await registerApi(data)
            handleClick()
            setTimeout(()=>{
                navigate('/login')
            },2000)
        }

        catch(err){
            
        }

        setemail("")
        setpassword("")
        setusername("")
    }
    return (
        <> 


        <Snackbar   Snackbar open={success} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:'rgb(56, 142, 60)' , color:'white'}}>
          You Have Successfully Registered !!
        </Alert>
        </Snackbar>







            <div className='register-body'>
                <Navbar/>

                <br />
                <br />

                <motion.div
                 initial={{y:100 , opacity:0}}
                 animate={{y:0 , opacity:1}}
                 transition={{delay:0.5,duration:0.75}}
                >
                    <form onSubmit={handleSubmit}>
                <Grid container spacing={2} justifyContent={'center'} flexDirection={'column'} alignContent={'center'}>


                    <Grid item xs={10}>
                    <Typography sx={{color:'white', textAlign:'center'}} className='register-title'  gutterBottom>
                        CREATE NEW ACCOUNT
                    </Typography>

                    <Typography sx={{color:'white' , textAlign:'center'}}  gutterBottom>
                    Already a Member , LOG IN
                    </Typography>
                    
                    </Grid>


                    <Grid item  xs={12} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} className='grid-input-register'  justifyItems={'center'} >

                    <div className='input-div-register'>
                    <FormControl fullWidth > 
                        <Input
                        disableUnderline={true}
                        fullWidth
                        type='text'
                        placeholder="Username"
                        required={true}
                        value={username}
                        className='register-input'
                        onChange={(e)=> setusername(e.target.value)}
                        startAdornment={
                        <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                            <PersonIcon/>
                        </InputAdornment>
                    }
                    />
                    </FormControl>
                    </div>


                    </Grid>









    

                    <Grid item  xs={12} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} className='grid-input-register'  justifyItems={'center'} >

                        <div className='input-div-register'>
                        <FormControl fullWidth > 
                            <Input
                            disableUnderline={true}
                            fullWidth
                            type='email'
                            placeholder="Email"
                            required={true}
                            value={email}
                            className='register-input'
                            onChange={(e)=> setemail(e.target.value)}
                            startAdornment={
                            <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                <EmailIcon/>
                            </InputAdornment>
                        }
                        />
                        </FormControl>
                        </div>
                        

                        </Grid>

                        <Grid item  xs={11} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} justifyItems={'center'}>
                        

                        <div className='input-div-register'>
                        <FormControl fullWidth> 
                            <Input
                            disableUnderline={true}
                            fullWidth
                            type='password'
                            placeholder="Password"
                            required={true}
                            value={password}
                            className='register-input'
                            onChange={(e)=> setpassword(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                <HttpsIcon/>
                             </InputAdornment>
                        }
                        />
                        </FormControl>
                        </div>

                        </Grid>




                        <Grid item xs={12} sm={7} md={6} lg={6} xl={12} justifyContent={'center'}>

                            <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
                         <Button size="medium" type='submit' className='btn-login-card' fullWidth sx={{width:'50%'}}>REGISTER HERE</Button>
                            </div>



                        </Grid>
                    


                </Grid>

                        </form>
                </motion.div>
            </div>
        
        
        
        
        </>
    )
}

export default Register