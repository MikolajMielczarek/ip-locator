import React from 'react';
import Alert from '@mui/material/Alert';

interface ErrorAlertProps {
  message: string;
  code?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, code }) => {
  return (
    <Alert severity="error">
      <strong>{message}</strong>
      {code && <div>Error Code: {code}</div>}
    </Alert>
  );
};

export default ErrorAlert;