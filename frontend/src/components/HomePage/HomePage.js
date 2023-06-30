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
import {motion} from "framer-motion"
import Navbar from "../Navbar/Navbar"                     
import { useNavigate } from 'react-router-dom';



export default function HomePage() {

    const navigate=useNavigate();

    const handleclick = ()=>{
        navigate("/login")
    }




  return (
    <div className='homepage-body'>
        <Navbar/>

        <Container className='homepage-grid' maxWidth="false">
            <Row  justify={'space-around'}> 

                    <Col  xs={24} sm={24} md={10} lg={8} xl={8}>
                        
                        <motion.div className='homepage-grid-div'
                            initial={{y:100,opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{duration:0.75}}
                        >
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
                                    <Typography sx={{marginTop:'1rem'}} className='homepage-grid-card-content content-desc' variant="body2" color="text.secondary">
                                       Welcome to your own personal Documents store. Use it to store notes for your college , your personal documents , family files and so on. Quickly share your documents with your family and friends over whatsapp and telegram.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:'flex'}} className='btn-div'>
                                    <Button onClick={handleclick} disableFocusRipple  className='homepage-btn' size="medium">GET STARTED</Button>
                                </CardActions>
                                </Card>  
                        </motion.div>
                    </Col>
                    <Col xs={0} sm={0} md={10} lg={12} xl={12}>
                        <motion.div 
                        initial={{y:100,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.75}}
                        className='homepage-grid-div'>
                        <Lottie  animationData={animationData} loop={false} />
                        </motion.div>
                    </Col>


            </Row>
            </Container>

            <div className='homepage-footer'>
            <HomeFooter/>
            </div>
      </div>
  )
}
