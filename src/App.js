import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail.js'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Footer from './components/Footer.js'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import './index.css'
import axios from 'axios'
import { server } from './utils/constants.js'
import { Context } from './index.js'
import { useState, useContext, useEffect } from 'react'



function App() {
  const { setUser, setIsAuthenticated, isAuthenticated } = useContext(Context);
 useEffect(()=> {
  axios
  .get(`${server}/users/userdetails`, {
    withCredentials: true,
  })
  .then((res) => {
    setUser(res.data.user), setIsAuthenticated(true), setLoader(false);
  })
  .catch((error) => {
    setUser({}),
      setIsAuthenticated(false),
      error.response.data.message;
  });
 }, [])
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App;
