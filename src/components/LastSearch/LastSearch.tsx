import React from 'react';
import { Grid, Container, Paper } from '@mui/material';
import MapSearch from './MapSearch/MapSearch';
import InformationSearch from './InformationSearch/InformationSearch';

const LastSearch: React.FC = () => {
  return (
    <Container style={{ height: '100%' }}>
      <Grid container spacing={2} style={{ height: '100%' }}>
        <Grid style={{ paddingBottom: '16px' }} item xs={12} md={8}>
          <Paper style={{ height: '100%' }}>
            <MapSearch />
          </Paper>
        </Grid>
        <Grid style={{ paddingBottom: '16px' }} item xs={12} md={4}>
          <Paper style={{ height: '100%' }}>
            <InformationSearch />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LastSearch;
