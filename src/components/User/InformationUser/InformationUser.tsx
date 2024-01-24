import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackUser';
import ErrorAlert from '../../ErrorAlert';
import { selectIp } from '../../../redux/user';
import { Paper, Typography } from '@mui/material';

const InformationUser: React.FC = () => {
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
      {!dataStore.error?.info && (
        <>
          <Typography>Your IP: {ipStore}</Typography>
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

export default InformationUser;
