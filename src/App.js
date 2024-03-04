import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail.js'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />

      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
