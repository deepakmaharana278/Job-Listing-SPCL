import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Register from './auth/Register';
import Login from './auth/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/jobs/:id' element={<JobDetails/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App