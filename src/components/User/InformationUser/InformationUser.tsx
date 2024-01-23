import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackUser';
import ErrorAlert from '../../ErrorAlert';
import { selectIp } from '../../../redux/user';

const InformationUser: React.FC = () => {
  const ipStore = useAppSelector(selectIp);
  const dataStore = useAppSelector(selectStack);

    return (
      <div>
        {dataStore.error?.info && <ErrorAlert message={dataStore.error.info} />}
        {!dataStore.error?.info &&
        <>
          <p>Your IP: {ipStore}</p>
          <p>Continent name: {dataStore.continent_name}</p>
          <p>Continent code: {dataStore.continent_code}</p>
          <p>Country name: {dataStore.country_name}</p>
          <p>Country code: {dataStore.country_code}</p>
          <p>City: {dataStore.city}</p>
          <p>Zip: {dataStore.zip}</p>
          <p>Latitude: {dataStore.latitude}</p>
          <p>Longitude: {dataStore.longitude}</p>
        </>
        }
      </div>
    );
  };
  
export default InformationUser;
