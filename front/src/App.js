import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './components/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './components/NotFound';
import Users from './pages/Users';

const App = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/users" element={token ? <Users /> : <Navigate to="/sign-in" />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
