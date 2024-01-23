import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackSearch';
import ErrorAlert from '../../ErrorAlert';
import { selectIp } from '../../../redux/search';

const InformationSearch: React.FC = () => {
  const ipStore = useAppSelector(selectIp);
  const dataStore = useAppSelector(selectStack);

    return (
      <div>
        {dataStore.error?.info && <ErrorAlert message={dataStore.error.info} />}
        {!dataStore.continent_name &&
        <>
          <p>Search IP: Home</p>
          <p>Continent name: North America</p>
          <p>Continent code: NA</p>
          <p>Country name: United States</p>
          <p>Country code: US</p>
          <p>City: San Francisco</p>
          <p>Zip: 94114</p>
          <p>Latitude: 37.773972</p>
          <p>Longitude: -122.431297</p>
        </>
        }
        {dataStore.continent_name && ipStore &&
        <>
          <p>Search IP: {ipStore}</p>
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
  
export default InformationSearch;