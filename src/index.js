import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './Contact';
import Services from './Services';
import Profile from './Profile';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import './Contact.css';
import './Profile.css';
import './Portfolio.css';
import './Services.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
    </Routes>
  </BrowserRouter>
);

/*
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <CookiesProvider>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={< LandingPage />}></Route>
    </Routes>
  </BrowserRouter>
  </CookiesProvider>
);
*/


// If you want to start m 
reportWebVitals();
