import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/landingPage';
import FormsPage from './pages/FormsPage/formsPage';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/formulario" element={<FormsPage/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);
