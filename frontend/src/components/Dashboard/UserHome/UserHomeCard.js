import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Card, CardActions, CardContent, Button, Typography , Grid} from '@mui/material'
import {WhatsappShareButton , WhatsappIcon , TelegramShareButton,TelegramIcon} from "react-share";
import {deleteApi} from "../../../api/deleteapi"



export default function UserHomeCard(props) {


    const deletefile = async ()=>{

        const data = {
            fileid:props.data._id,
            ref:props.data.ref
        }
        try{
            const response = await deleteApi(data);
        }
        catch(err){
            console.log(err);
        }

        props.getFile();
    }




  return (
    <>
    

        <Grid item xs={12} sm={9} md={6} lg={6} xl={4}>
        <Card  className='dash-card'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' , textAlign:'center' }}>
                                        {props.data.filename}
                                    </Typography>

                                </CardContent>
                                <CardActions>

                                    <div style={{width:'100%' , display:'flex' , justifyContent:'space-evenly' , marginBottom:'1rem'}} >
                                        <a href={props.data.url}>
                                    <Button size="medium" className='dashboard-btn-card' startIcon={<RemoveRedEyeIcon/>}>
                                    </Button>
                                        </a>

                                    <WhatsappShareButton  url={props.data.url}>
                                        <WhatsappIcon size={32} className='dashboard-btn-card' />
                                    </WhatsappShareButton>

                                    <TelegramShareButton  url={props.data.url}>
                                        <TelegramIcon size={32} className='dashboard-btn-card' />
                                    </TelegramShareButton>

                                    
                                    <Button size="medium" onClick={deletefile} className='dashboard-btn-card' startIcon={<DeleteIcon/>}>
                                        
                                    </Button>
                                    </div>

                                </CardActions>
                            </Card>
                            </Grid>

    
    </>
  )
}
