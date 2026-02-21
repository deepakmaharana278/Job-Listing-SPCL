import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/jobs/:id' element={<JobDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App