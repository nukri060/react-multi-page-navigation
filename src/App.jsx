import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NavLayout from './pages/layouts/navLayout';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:username" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
