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
import HomeFooter from '../HomeFooter/HomeFooter';
import { Col, Row } from 'antd';




export default function HomePage() {
  return (
    <div className='homepage-body'>
        

        <Container className='homepage-grid' maxWidth="false">
            <Row  justify={'space-around'}> 

                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        
                        <div className='homepage-grid-div'>
                            <Card className='homepage-grid-card'>
                                <CardContent>
                                    <Typography className='homepage-grid-card-content' gutterBottom variant="h4" component="div">
                                    SHARE DOCS SECURELY
                                    </Typography>
                                    <Typography className='homepage-grid-card-content' gutterBottom variant="h4" component="div">
                                    WITH FAMILY
                                    </Typography>
                                    <Typography sx={{marginTop:'1rem'}} className='homepage-grid-card-content' variant="body2" color="text.secondary">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam. Nisi eum, consectetur inventore minus fugiat velit rem accusamus quos. Quae alias accusamus, architecto quidem tempore vero atque quibusdam perspiciatis.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button disableFocusRipple  className='homepage-btn' size="medium">GET STARTED</Button>
                                </CardActions>
                                </Card>  
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={10} lg={12} xl={12}>
                        <div className='homepage-grid-div'>
                        <Lottie  animationData={animationData} loop={true} />
                        </div>
                    </Col>


            </Row>
            </Container>

            <div className='homepage-footer'>
            <HomeFooter/>
            </div>
      </div>
  )
}
