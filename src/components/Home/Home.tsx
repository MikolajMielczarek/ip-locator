import React from 'react';
import { Grid, Container, Paper, Typography } from '@mui/material';
import ListSearches from '../ListSearches/ListSearches';
import User from '../User/User';
import Search from '../Search/Search';
import LastSearch from '../LastSearch/LastSearch';

const Home: React.FC = () => {
  return (
    <Container style={{ padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper
            style={{
              height: '96.6vh',
              borderRadius: 10,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              overflowY: 'auto',
              backgroundColor: '#6b79ef',
            }}
          >
            <ListSearches />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9} container spacing={2}>
          <Grid item xs={12}>
            <Paper
              style={{
                height: '42vh',
                borderRadius: 10,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: 16 }}>
              </Typography>
              <User />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{
                height: '11vh',
                borderRadius: 10,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Search />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{
                height: '42vh',
                borderRadius: 10,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <LastSearch />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
