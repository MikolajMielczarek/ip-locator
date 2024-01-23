import React, { useEffect } from 'react';
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
      <>
        <MapUser />
        <InformationUser />
      </>
    );
  };
  
export default User;