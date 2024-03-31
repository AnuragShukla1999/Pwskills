import React from 'react'
import PhotoDetails from './pages/PhotoDetails'
import Photos from './pages/Photos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Photos />} />
        <Route path='/photos/:id' element={<PhotoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App