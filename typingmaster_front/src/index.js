import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Main from './Components/Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Header from './Components/Organization/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='globalWrap'>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
