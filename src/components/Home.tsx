import React from 'react'
import Map from './Map';
import { Container } from '@mui/material';
import { useAppSelector } from '../redux/hooks';
import { selectIp, selectStackUrl } from '../redux/ip';
import { useFetchIpStack } from '../hooks/useFetchIpStack';
  
const Home: React.FC = () => {
    const ipStore = useAppSelector(selectIp);
    const stackUrlStore = useAppSelector(selectStackUrl);
    const {data} = useFetchIpStack(stackUrlStore);

    return (
        <Container fixed>
            {ipStore}
            {!data && <Map location={{ lat: 37.773972, lng: -122.431297 }}/>}
            {data.latitude && data.longitude && <Map location={{ lat: data.latitude, lng: data.longitude }}/>}
        </Container>
    )
}

export default Home;