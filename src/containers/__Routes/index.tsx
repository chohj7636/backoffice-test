import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';

const env = process.env.NODE_ENV;
let isDevelopment = false;
if (env === 'development') {
  isDevelopment = true;
}

const RoutesList = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default RoutesList;
