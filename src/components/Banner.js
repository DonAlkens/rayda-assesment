import React from 'react'
import banner from '../assets/Image.png'
import { Box } from '@mui/material'

const Banner = () => {
  return (
    <Box className='App-image-wrapper'>
      <img src={banner} alt="" className="App-header-image" />
    </Box>
  )
}

export default Banner