const [open, setOpen] = useState(false)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#5a7e73',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };


    const [fname, setfname] = useState("");
    const [fdes, setfdes] = useState("");



    <div className='dash-body'>
    <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={9} md={6} lg={6} xl={4}>
            <Button
                sx={{ fontSize: "30px", color: 'white', backgroundColor: '#5a7e73', borderRadius: '30px', marginTop: '40px' }}
                className='rectangle'
                onClick={() => {
                    setOpen(true)
                }}>
                Upload A File
            </Button>
            <Modal open={open} onClose={() => {
                setOpen(false)
            }}>
                <Box sx={style}>
                    <FormControl fullWidth >
                        <Input
                            disableUnderline={true}
                            fullWidth
                            type='text'
                            placeholder="File Name"
                            required={true}
                            value={fname}
                            onChange={(e) => setfname(e.target.value)}
                            sx={{
                                margin: '10px',
                                backgroundColor: '#a0dede',
                                borderRadius:'5px',
                            }}

                        />
                        <br></br>
                        <Input
                            disableUnderline={true}
                            fullWidth
                            type='text'
                            placeholder="File Description"
                            required={true}
                            value={fdes}
                            onChange={(e) => setfdes(e.target.value)}
                            sx={{
                                margin: '10px',
                                backgroundColor: '#a0dede',
                                borderRadius:'5px',
                            }}

                        />
                    </FormControl>
                    <Button variant='contained'
                        sx={{ margin: '10px' }}
                    >
                        Click to Upload
                    </Button>
                    <Button variant='contained' onClick={() => {
                        setOpen(false)
                    }}>
                        Cancel
                    </Button>

                </Box>


            </Modal>
        </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={12} sm={9} md={6} lg={6} xl={4}>
            <Card sx={{ backgroundColor: '#256559', margin: '40px', maxWidth: 345 }} className='dash-card'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                        File Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                        File Description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" sx={{ backgroundColor: '#256559', }}>
                        Share
                    </Button>
                    <Button size="medium" sx={{ backgroundColor: '#ee0000' }}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
</div>

