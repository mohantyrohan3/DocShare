import React, { useState } from 'react';
import { Typography, Grid, Button, Link, FormControl, Input } from '@mui/material'
import './Register.css'

const Register = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
    })
    //input change functions
    const handleChange = (e) => {
        setInputs(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <div className='register-body'>
            <Grid justifyItems="center" alignItems="center" sx={{ textAlign: 'center' }} >
                <Typography variant="h4">
                    CREATE A NEW ACCOUNT
                </Typography>
                <Typography variant="h6">
                    ALREADY A MEMBER , <Link href="#" color="inherit" underline="none">LOG IN</Link>
                </Typography>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '100vh' }}
                >
                    <Grid item xs={3}>
                        <form onSubmit={handleSubmit}>

                            <FormControl fullWidth error >
                                <Input
                                    type='text'
                                    placeholder="Username"
                                    required={true}
                                    disableUnderline={true}
                                    value={inputs.name}
                                    onChange={handleChange}
                                    sx={{
                                        borderRadius: 2,
                                        margin: '15px',
                                        height: '50px'
                                    }}
                                    className='register-input' />

                                <br />

                                <Input
                                    type='email'
                                    placeholder="Email"
                                    required={true}
                                    disableUnderline={true}
                                    value={inputs.email}
                                    onChange={handleChange}
                                    sx={{
                                        borderRadius: 2,
                                        margin: '15px',
                                        height: '50px'
                                    }}
                                    className='register-input' />

                                <br />

                                <Input
                                    type='password'
                                    placeholder="Password"
                                    required={true}
                                    disableUnderline={true}
                                    value={inputs.password}
                                    onChange={handleChange}
                                    sx={{
                                        borderRadius: 2,
                                        margin: '15px',
                                        height: '50px'
                                    }}
                                    className='register-input' />

                                <br />

                                <Button
                                    type='submit'
                                    onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: '#21206C',
                                        margin: "15px",
                                        borderRadius: '4px',
                                        width: '103px',
                                        height: '50px',
                                    }} >
                                    REGISTER
                                </Button>
                            </FormControl>

                        </form>
                    </Grid>
                </Grid>



            </Grid>



        </div>
    )
}

export default Register