import { Avatar, Box, Button, Grid } from '@mui/material'
import React from 'react'

const Item = ({details}) => {

    const symbol =  details.name?.charAt(0) +''+ details.name?.split(' ')[1].charAt(0);

    return (
        <Grid item md={3} xs={3}>
            <Box className='App-item'>
                <Box className='App-item-image-wrapper'>
                    <img src={details.image} alt={details.name}/>
                </Box>
                <Box className='App-item-info'>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Avatar className='App-avatar' sx={{ bgcolor: "#F2F4F7", color: '#475467', fontSize: '14px', fontWeight: 500 }}>{symbol}</Avatar>
                        <span className='App-bidder-name'>{details.name} <small className='App-bidder-rank'>(Highest Bidder)</small></span>
                    </Box>
                </Box>
                <Box className='App-item-details'>
                    <h3 className='App-item-name'>{details.title}</h3>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <span className='App-item-price-title'>Current Bid:</span>
                        <span className='App-item-price'>{details.bid}</span>
                    </Box>
                </Box>
                <Box className="App-item-action">
                    <Button variant="contained" className='App-button'>
                        Add to wishlist
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Item