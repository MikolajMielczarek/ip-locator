import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Spinner from './components/Spinner';
import ErrorAlert from './components/ErrorAlert';

function App() {
  //For now, later from redux
  const error = false;
  const loading = false;

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
