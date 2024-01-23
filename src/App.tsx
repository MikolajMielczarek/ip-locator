import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Spinner from './components/Spinner';
import ErrorAlert from './components/ErrorAlert';
import "./styles.css";
import { useFetchIp } from './hooks/useFetchIp';
import { useAppDispatch } from './redux/hooks';
import { ipAndStackUrlToStore } from './redux/user';

function App() {
  // This one is to check an error about monthly usage limit has been reached.
  // const accessKeyIpStack = '069c471ff2655a70d7cf3c1d38cfc1d4';
  
  const apiIpUrl = 'http://worldtimeapi.org/api/ip/';
  const {data} = useFetchIp(apiIpUrl);
  const error = false;
  const loading = false;
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (data) {
      dispatch(ipAndStackUrlToStore(data.client_ip));
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
