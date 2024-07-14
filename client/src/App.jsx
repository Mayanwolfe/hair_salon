import React from 'react';
import { Outlet } from 'react-router-dom';

//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  return (
    <div>
      <header>
        <h1>The Mane Wolf Hair Salon</h1>
        <nav>
          <a href="/">Home</a> | <a href="/staff">Staff</a> | <a href="/services">Services</a> | <a href="/booking">Booking</a> | <a href="/admin">Admin</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
