import React from 'react'
import { BiLike } from 'react-icons/bi';
import { Avatar, Box, Button, Container, Grid } from '@mui/material';
import Banner from './components/Banner';

import './App.css';
import Item from './components/Item';
import Header from './components/Header';
import { useGetPostsQuery } from './setup';

function App() {

  const {
    data: items,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery()

  let itemContent;

  if (isLoading) {
    itemContent = (<Grid item md={12}><p>Please wait, we're fetching items...</p></Grid>)
  } else if(isSuccess) {
    itemContent = items.data.map((item) => <Item details={item} />)
  } else if (isError) {
    itemContent = (<Grid item md={12}>
      <p style={{ color: 'red' }}>We're sorry an error occured. Please try again later.</p>
      <p>Error Details: {error}</p>
    </Grid>)
  }

  return (
    <Box className="App">
      <Header />
      <Box className='App-content'>
        <Container maxWidth="none">
          <Box
            sx={{
              boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #EAECF0",
              p: 3,
            }}
          >
            <Banner />
            <Container>
              <Box className='App-details'>
                <Box sx={{ display: 'flex', gap: '2' }}>
                  <Box className='App-avatar-wrapper'>
                    <Box className='App-avatar'>
                      <Avatar alt="Avatar" src='/static/Avatar.png' sx={{ width: 144, height: 144 }} />
                    </Box>
                  </Box>
                  <Box className='App-info'>
                    <h2>Starts in:3 days:2 hours:24 minutes </h2>
                    <p>
                      <span className='App-status'>
                        <span className='dot'></span> Not Live
                      </span>
                      <span>Layers Auction</span>
                    </p>
                  </Box>
                </Box>

                <Button variant="outlined" startIcon={<BiLike />} className='App-button'>
                  Accept Invite
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>

        <Container maxWidth="none">
          <Box
            sx={{
              marginTop: 3,
              boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #EAECF0",
              p: 3,
            }}
          >
            <Box className='App-catalog'>
              <Box className='App-catalog-header'>
                <Box className='App-catalog-title'>
                  <h3>Featured Items</h3>
                </Box>
                <Box className='App-catalog-action'>
                  <Button variant="outlined" className='App-button'>
                    View Auction
                  </Button>
                </Box>
              </Box>

              <Box className='App-catalog-list'>
                <Grid container spacing={2}>
                  {itemContent}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>

      </Box>
    </Box>
  );
}

export default App;
