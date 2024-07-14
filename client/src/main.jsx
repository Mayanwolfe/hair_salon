import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import './index.css';

//This is where the React components are attached to the "root" div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/*Set the default route to render the App component containing the header along with the target page*/}
      <Route path="/" element={<App />}>
        {/*Set global routes with Home as the default Outlet route*/}
        <Route index element={<Home />} />
        <Route path="staff" element={<Staff />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </Router>,
)
