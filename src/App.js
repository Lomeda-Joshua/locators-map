import {React,useState} from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import Home from './pages/Home';
import Locators_map from './pages/Locators_map';
import Division_profiles from './pages/Division_profiles';
import Inquiries from './pages/Inquiries';
import Contact_us from './pages/Contact_us';

import './App.css';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/locators-map" element={<Locators_map />}/>
          <Route path="/division-profiles" element={<Division_profiles />}/>
          <Route path="/inquiries" element={<Inquiries />}/>
          <Route path="/contact-us" element={<Contact_us />}/>
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;


//For browser router initial code
/* 
<BrowserRouter>
<header>
  <Navigation />
</header>
</BrowserRouter>

<div className = "content">
   <Routes>
    <Route path = "/" element = {<Home />} />
  </Routes> 
  <Home/>
</div> */
