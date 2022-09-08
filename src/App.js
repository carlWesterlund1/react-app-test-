import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Schedule from './components/pages/Schedule';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route />
          <Route path='/beginners' exact element={<Courses />} />
          <Route />
          <Route path='/schedule' exact element={<Schedule />} />
          <Route />
          <Route path='/about' exact element={<About className='about-page' />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
