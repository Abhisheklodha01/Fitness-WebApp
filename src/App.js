import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
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
import UserProfile from './components/UserProfile.jsx'
import { server } from './utils/constants.js'
import axios from 'axios'
import { Context } from './index.js'
import FitnessDetails from './pages/FitnessDetails.jsx'

function App() {

  const {
    isAuthenticated,
    setUser,
    setIsAuthenticated,
    setUserFitness,
    fitness,
    setFitnessSuggetion,
  } = useContext(Context)
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios
      .get(`${server}/users/userdetails`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`,
        }

      })
      .then((res) => {
        setUser(res.data.user)
        setIsAuthenticated(true)
      })
      .catch((error) => {
        setUser({})
      });
  }, [isAuthenticated])

  useEffect(() => {
    axios
      .get(`${server}/users/getfitnessdetails`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`,
        }

      })
      .then((res) => {
        setUserFitness(res.data.userFitness)
      })
      .catch((error) => {
        setUser({})
      });
  }, [isAuthenticated, fitness,])


  useEffect(() => {
    axios
      .get(`${server}/users/getfitnesssuggetion`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`,
        }

      })
      .then((res) => {
        setFitnessSuggetion(res.data.fitnessSuggetion)
      })
      .catch((error) => {
        setUser({})
      });
  }, [isAuthenticated, fitness,])

  useEffect(() => {
    const clearLocalStorageAfterDelay = () => {
      const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
      setTimeout(() => {
        localStorage.removeItem('token');
      }, twentyFourHoursInMilliseconds);
    };

    clearLocalStorageAfterDelay();

    return () => clearTimeout(clearLocalStorageAfterDelay);
  }, []);


  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/fitnessdetails' element={<FitnessDetails />} />
          <Route path='/home' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
          <Route path='/user' element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App;
