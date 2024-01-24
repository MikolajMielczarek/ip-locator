import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Spinner from './components/Spinner';
import ErrorAlert from './components/ErrorAlert';
import { useAppDispatch } from './redux/hooks';
import { ipAndStackUrlToStore, isErrorIp, isLoadingIp } from './redux/user';
import { updateListStore } from './redux/search';
import useFetch from './hooks/useFetch';
import { UserData } from './interfaces';

function App() {
  const apiIpUrl = 'http://worldtimeapi.org/api/ip/';
  const {data, error, loading} = useFetch<UserData>(apiIpUrl);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const storedSessionList:string[] = JSON.parse(sessionStorage.getItem('sessionList') || '[]');
    if (storedSessionList.length > 0) {
      dispatch(updateListStore(storedSessionList));
    }
  }, []);
  
  useEffect(() => {
    if (data) {
      dispatch(ipAndStackUrlToStore(data.client_ip));
    }
    if (error) {
      dispatch(isErrorIp(error));
    }
    if (loading) {
      dispatch(isLoadingIp());
    }
  }, [data]);

  return (
    <main className="page-container">
        {error && <ErrorAlert message={'There is a problem with worldtimeapi'} />}
        {loading && <Spinner />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
