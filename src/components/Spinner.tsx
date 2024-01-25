import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const Spinner: React.FC = () => {
  return (
    <div style={loaderStyle}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Spinner;
