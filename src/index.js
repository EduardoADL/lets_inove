import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import FormsPage from './pages/FormsPage/formsPage';
import ExibirXML from './pages/Sitemap/Sitemap';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(ExibirXML);

root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/formulario" element={<FormsPage/>} />
          <Route path="/sitemap.xml" element={<ExibirXML/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);
