import React, { useState } from 'react';
import { Typography, Grid, Button, Link, FormControl, Input } from '@mui/material'
import './Login.css'

const Login = () => {
  const [inputs, setInputs] = useState({
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
    <div className='login-body'>
      <Grid justifyItems="center" alignItems="center" sx={{ textAlign: 'center' }} >
        <Typography variant="h4">
          HEY, WELCOME BACK
        </Typography>
        <Typography variant="h6">
          DON'T HAVE AN ACCOUNT , <Link href="#" color="inherit" underline="none">SIGN IN</Link>
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
            <form>

              <FormControl fullWidth error >


                <Input
                  type='email'
                  placeholder="Email"
                  required={true}
                  value={inputs.email}
                  disableUnderline={true}
                  onChange={handleChange}
                  sx={{
                    borderRadius: 2,
                    margin: '15px'
                  }}
                  className='login-input' />

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
                    margin: '15px'
                  }}
                  className='login-input' />

                <br />

                <Button
                  type='submit'
                  sx={{
                    backgroundColor: '#21206C',
                    margin: "15px",
                    borderRadius: '4px',
                    width: '103px',
                    height: '50px',
                  }} >
                  LOGIN
                </Button>
              </FormControl>

            </form>
          </Grid>
        </Grid>



      </Grid>



    </div>
  )
}

export default Login