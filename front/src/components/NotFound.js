import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div >
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <NavLink to="/" className="link">Back to HOME here</NavLink>
        </div>
      );
};

export default NotFound;