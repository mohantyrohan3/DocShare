import React from 'react'
import "./HomePage.css"
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
import { TypeAnimation } from 'react-type-animation';



export default function HomePage() {
  return (
    <div className='homepage-body'>
        

        <Container className='homepage-grid' maxWidth="false">
            <Row  justify={'space-around'}> 

                    <Col  xs={24} sm={24} md={10} lg={8} xl={8}>
                        
                        <div className='homepage-grid-div'>
                            <Card className='homepage-grid-card' sx={{marginTop:'4rem'}}>
                                <CardContent>
                                    <Typography className='homepage-grid-card-content card-title' gutterBottom  component="div">
                                    SHARE DOCS SECURELY
                                    </Typography>
                                    <Typography className='homepage-grid-card-content card-title' gutterBottom  component="div">
                                    <TypeAnimation
                                            preRenderFirstString={true}
                                            sequence={[
                                            500,
                                            'WITH FRIENDS',
                                            1000,
                                            'WITH PARENTS',
                                            1000,
                                            'WITH RELATIVES',
                                            1000,
                                            'WITH COLLEAGUES',
                                            500,
                                            ]}
                                            speed={50}
                                            // style={{ fontSize: '2rem' }}
                                            repeat={Infinity}
                                        />
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
