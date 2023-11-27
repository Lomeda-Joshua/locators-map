// Dependencies
import {React} from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

// Root layout
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import Locators_Map from './pages/Locators_Map';
import Division_Profiles from './pages/Division_Profiles';
import Inquiries from './pages/Inquiries';
import Contact_us from './pages/Contact_Us';
import Error_page from './pages/Error_Page';

// Style sheet
import './App.css';


function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error_page />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/locators-map",
            element: <Locators_Map />
          },
          {
            path: "/division-profiles",
            element: <Division_Profiles />
          },
          {
            path: "/inquiries",
            element: <Inquiries />
          },
          {
            path: "/contact-us",
            element: <Contact_us />
          }
        ]
      },
    ]
  );


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;