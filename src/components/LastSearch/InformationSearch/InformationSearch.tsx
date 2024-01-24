import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackSearch';
import ErrorAlert from '../../ErrorAlert';
import { selectIp } from '../../../redux/search';
import { Paper, Typography } from '@mui/material';

const InformationSearch: React.FC = () => {
  const ipStore = useAppSelector(selectIp);
  const dataStore = useAppSelector(selectStack);

  return (
    <Paper
      sx={{
        backgroundColor: '#5ac59b',
        color: '#ffffff',
        padding: '16px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& p': {
          fontSize: '1.6rem',
          fontWeight: 'bold',
          marginBottom: '8px',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#478b7e',
          },
        },
      }}
    >
      {dataStore.error?.info && <ErrorAlert message={dataStore.error.info} />}
      {!dataStore.continent_name && (
        <>
          <Typography>Search IP: Home</Typography>
          <Typography>Continent name: North America</Typography>
          <Typography>Continent code: NA</Typography>
          <Typography>Country name: United States</Typography>
          <Typography>Country code: US</Typography>
          <Typography>City: San Francisco</Typography>
          <Typography>Zip: 94114</Typography>
          <Typography>Latitude: 37.773972</Typography>
          <Typography>Longitude: -122.431297</Typography>
        </>
      )}
      {dataStore.continent_name && ipStore && (
        <>
          <Typography>Search IP: {ipStore}</Typography>
          <Typography>Continent name: {dataStore.continent_name}</Typography>
          <Typography>Continent code: {dataStore.continent_code}</Typography>
          <Typography>Country name: {dataStore.country_name}</Typography>
          <Typography>Country code: {dataStore.country_code}</Typography>
          <Typography>City: {dataStore.city}</Typography>
          <Typography>Zip: {dataStore.zip}</Typography>
          <Typography>Latitude: {dataStore.latitude}</Typography>
          <Typography>Longitude: {dataStore.longitude}</Typography>
        </>
      )}
    </Paper>
  );
};

export default InformationSearch;
