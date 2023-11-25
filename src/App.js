// Dependencies
import {React} from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

// Root layout
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import Locators_map from './pages/Locators_map';
import Division_profiles from './pages/Division_profiles';
import Inquiries from './pages/Inquiries';
import Contact_us from './pages/Contact_us';
import Error_page from './pages/Error_page';

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
            path: "/home",
            element: <Home />
          },
          {
            path: "/locators-map",
            element: <Locators_map />
          },
          {
            path: "/division-profiles",
            element: <Division_profiles />
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