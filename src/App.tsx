import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Spinner from './components/Spinner';
import ErrorAlert from './components/ErrorAlert';
import "./styles.css";
import { useFetchIp } from './hooks/useFetchIp';
import { useAppDispatch } from './redux/hooks';
import { ipToStore, stackUrlToStore } from './redux/ip';

function App() {
  const accessKeyIpStack = '95531ec13f8916e50eca8d412d62926a';
  const apiIpUrl = 'http://worldtimeapi.org/api/ip/';
  const {data} = useFetchIp(apiIpUrl);
  const error = false;
  const loading = false;
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (data) {
      dispatch(ipToStore(data.client_ip));
      dispatch(stackUrlToStore(`http://api.ipstack.com/${data.client_ip}?access_key=${accessKeyIpStack}`))
    }
  }, [data]);

  return (
    <main className="page-container">
      <div>
        {error && <ErrorAlert message={error} />}
        {loading && <Spinner />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
