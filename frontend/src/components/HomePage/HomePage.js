import React from 'react'
import "./HomePage.css"
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import animationData from "../../assets/8558-floating-document.json"
import Lottie from "lottie-react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





export default function HomePage() {
  return (
    <div className='homepage-body'>
        

        <Container className='homepage-grid' maxWidth="false">
            <Grid container  justifyContent={'space-around'}> 

                    <Grid item xs={4}>
                        <div className='homepage-grid-div'>
                        <Card sx={{ }} className='homepage-grid-card'>
                            <CardContent>
                                <Typography className='homepage-grid-card-content' gutterBottom variant="h5" component="div">
                                SHARE DOCS SECURELY
                                </Typography>
                                <Typography className='homepage-grid-card-content' gutterBottom variant="h5" component="div">
                                WITH FAMILY
                                </Typography>
                                <Typography className='homepage-grid-card-content' variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                            </CardActions>
                            </Card>  
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='homepage-grid-div'>
                        <Lottie animationData={animationData} loop={true} />;
                        </div>
                    </Grid>


            </Grid>
            </Container>

      </div>
  )
}
