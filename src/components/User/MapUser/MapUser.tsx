import React from 'react';
import Map from '../../Map';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackUser';
import { selectStackUrl } from '../../../redux/user';
import { useFetchIpStack } from '../../../hooks/useFetchIpStack';
import ErrorAlert from '../../ErrorAlert';

const MapUser: React.FC = () => {
    // const ipStore = useAppSelector(selectIp);
    const stackUrlStore = useAppSelector(selectStackUrl);
    const { data } = useFetchIpStack(stackUrlStore);
    const dataStore = useAppSelector(selectStack);

    return (
      <>
        {data.error?.info && <ErrorAlert message={data.error.info} />}
        {!data && <Map location={{ lat: 37.773972, lng: -122.431297 }}/>}
        {dataStore.latitude && dataStore.longitude && <Map location={{ lat: dataStore.latitude, lng: dataStore.longitude }}/>}
      </>
    );
  };
  
export default MapUser;