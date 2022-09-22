import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Contact';
import Products from './Products';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/aboutme' element={<AboutMe />}></Route>
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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
