import React, { useEffect } from 'react';
import { Grid, Container, Paper } from '@mui/material';
import MapUser from './MapUser/MapUser';
import InformationUser from './InformationUser/InformationUser';
import useFetch from '../../hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectStackUrl } from '../../redux/user';
import { isErrorStack, isLoadingStack, stackToStore } from '../../redux/stackUser';
import { LocationData } from '../../interfaces';
import Spinner from '../Spinner';
import ErrorAlert from '../ErrorAlert';

const User: React.FC = () => {
  const stackUrlStore = useAppSelector(selectStackUrl);
  const { data, error, loading } = useFetch<LocationData>(stackUrlStore);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (data) {
      dispatch(stackToStore(data));
    }
    if (error) {
      dispatch(isErrorStack(error));
    }
    if (loading) {
      dispatch(isLoadingStack());
    }
  }, [data]);

  if (error) {
    return <ErrorAlert message={'There is a problem with worldtimeapi'} />
  }
  if (data?.error?.info) {
    return <ErrorAlert message={data.error.info} />
  }
  if (loading) {
    return <Spinner />
  }

  return (
    <Container style={{ height: '100%' }}>
      <Grid container spacing={2} style={{ height: '100%' }}>
        <Grid style={{ paddingBottom: '16px' }} item xs={12} md={8}>
          <Paper style={{ height: '100%' }}>
            <MapUser />
          </Paper>
        </Grid>
        <Grid style={{ paddingBottom: '16px' }} item xs={12} md={4}>
          <Paper style={{ height: '100%' }}>
            <InformationUser />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
