import React, { useState } from 'react';
import './Login.css'
import Navbar from '../Navbar/Navbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/loginapi';
import {useDispatch } from 'react-redux'
import { addStatus } from '../../store/slices/userSlice';










const Login = () => {

    const dispatch = useDispatch();
    const navigate=useNavigate()
    // const user = useSelector((state)=> state.user)


    const [success, setsuccess] = useState(false);
    const [failure, setfailure] = useState(false);

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");





    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email:email,
            password:password
        }
        try{
            const response = await loginApi(data)
            if(response.data.msg === "Failed to Log In"){
                setfailure(true)
            }
            else{
                dispatch(addStatus(email))
                navigate('/user/home')
            }
        }

        catch(err){
            console.log(err)
        }
        setemail("")
        setpassword("")
    }
    return (
        <> 
            
            <Snackbar   Snackbar open={success} autoHideDuration={2000} onClose={()=> setsuccess(false)}>
            <Alert onClose={()=> setsuccess(false)} severity="success" sx={{ width: '100%', backgroundColor:'rgb(56, 142, 60)' , color:'white'}}>
            You Have Successfully Logged In !!
            </Alert>
            </Snackbar>


            
            <Snackbar   Snackbar open={failure} autoHideDuration={2000} onClose={()=> setfailure(false)}>
            <Alert onClose={()=> setfailure(false)}  severity="warning"  sx={{ width: '100%', backgroundColor:'rgb(211, 47, 47)' , color:'white'}}>
            Incorrect Username/ Password
            </Alert>
            </Snackbar>



            <div className='login-body'>
                <Navbar/>

                <br />
                <br />

                <motion.div
                 initial={{y:100 , opacity:0}}
                 animate={{y:0 , opacity:1}}
                 transition={{delay:0.5,duration:0.75}}
                >


                <form onSubmit={handleSubmit}>
                <Grid
               
                container spacing={2} justifyContent={'center'} flexDirection={'column'} alignContent={'center'}>


                    <Grid item xs={10}>
                    <Typography sx={{color:'white', textAlign:'center'}} className='login-title'  gutterBottom>
                          HEY , WELCOME BACK
                    </Typography>

                    <Typography sx={{color:'white' , textAlign:'center'}}  gutterBottom>
                    DON'T HAVE AN ACCOUNT ,  SIGN IN
                    </Typography>
                    
                    </Grid>









    

                    <Grid item  xs={12} sm={9} md={6} lg={6} xl={4} sx={{marginTop:'2rem'}} className='grid-input-login'  justifyItems={'center'} >

                        <div className='input-div-login'>
                        <FormControl fullWidth > 
                            <Input
                            disableUnderline={true}
                            fullWidth
                            type='email'
                            placeholder="Email"
                            required={true}
                            value={email}
                            className='login-input'
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
                        

                        <div className='input-div-login'>
                        <FormControl fullWidth> 
                            <Input
                            disableUnderline={true}
                            fullWidth
                            type='password'
                            placeholder="Password"
                            required={true}
                            value={password}
                            className='login-input'
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
                         <Button size="medium" type='submit' className='btn-login-card' fullWidth sx={{width:'50%'}}>LOGIN</Button>
                            </div>



                        </Grid>


                </Grid>
                </form>
                </motion.div>
            </div>
        
        
        
        
        </>
    )
}

export default Login