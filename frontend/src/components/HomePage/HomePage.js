import React from 'react'
import "./HomePage.css"
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import animationData from "../../assets/8558-floating-document.json"
import Lottie from "lottie-react";


export default function HomePage() {
  return (
    <div className='homepage-body'>
        

        <Container className='homepage-grid' maxWidth="false">
            <Grid container  justifyContent={'space-between'}> 

                    <Grid item xs={5}>
                        <div className='homepage-grid-div'>
                            Content
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className='homepage-grid-div'>
                        <Lottie animationData={animationData} loop={true} />;
                        </div>
                    </Grid>


            </Grid>
            </Container>

      </div>
  )
}
