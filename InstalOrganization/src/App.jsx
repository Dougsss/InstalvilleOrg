import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import './App.css';
import RouteList from "./routes/RouteList";


function App() {

  return (
    <BrowserRouter>
      <div>
        <RouteList />
      </div>
    </BrowserRouter>
  )
}

export default App
