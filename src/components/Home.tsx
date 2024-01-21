import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
  
const Home: React.FC = () => {
    const apiUrl = 'http://worldtimeapi.org/api/ip/';
    const {data, loading, error} = useFetch(apiUrl);
    const [ip, setIp] = useState<string>('');


    console.log('error', error)
    console.log('loading', loading)

    useEffect(() => {
      if (data.client_ip) {
        setIp(data.client_ip);
      }
    }, [data]);

    return (
        <div>
            {ip}
        </div>
    )
}

export default Home;