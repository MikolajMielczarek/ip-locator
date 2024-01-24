import React, { useEffect } from 'react';
import { Grid, Container, Paper } from '@mui/material';
import MapUser from './MapUser/MapUser';
import InformationUser from './InformationUser/InformationUser';
import { useFetchIpStack } from '../../hooks/useFetchIpStack';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectStackUrl } from '../../redux/user';
import { stackToStore } from '../../redux/stackUser';

const User: React.FC = () => {
  const stackUrlStore = useAppSelector(selectStackUrl);
  const { data } = useFetchIpStack(stackUrlStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(stackToStore(data));
    }
  }, [data]);

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
