import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Card, CardActions, CardContent, Button, Typography , Grid} from '@mui/material'

export default function UserHomeCard(props) {
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
                                        <a href={props.data.url} target='_blank'>
                                    <Button size="medium"  className='dashboard-btn-card' startIcon={<RemoveRedEyeIcon/>}>
                                    </Button>

                                        </a>

                                    <Button size="medium" className='dashboard-btn-card'  startIcon={<ShareIcon/>}>
                                        
                                    </Button>
                                    <Button size="medium" className='dashboard-btn-card' startIcon={<DeleteIcon/>}>
                                        
                                    </Button>
                                    </div>

                                </CardActions>
                            </Card>
                            </Grid>
    
    </>
  )
}
