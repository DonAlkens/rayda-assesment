import { Box, IconButton } from '@mui/material'
import React from 'react'
import { FiBell } from 'react-icons/fi'

const Header = () => {
  return (
    <Box className='App-header'>
        <Box className='App-title'>
          <h1>Welcome</h1>
          <p>Your current sales auction and activity</p>
        </Box>
        <Box className='App-notification'>
          <IconButton className='App-notification-icon'>
            <FiBell color='#667085' size={25} />
            <span className='App-notifiction-count'>2</span>
          </IconButton>
        </Box>
      </Box>
  )
}

export default Header