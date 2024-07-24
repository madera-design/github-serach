import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserSearch from './pages/UserSearch';
import RepoSearch from './pages/RepoSearch';
import Home from './pages/Home';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserSearch />} />
        <Route path="/repos" element={<RepoSearch />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;