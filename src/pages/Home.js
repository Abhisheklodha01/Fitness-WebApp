import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner.js'
import SearchExercises from '../components/SearchExercises.js'
import Exercises from '../components/Exercises.js'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index.js'
import axios from 'axios'
import { server } from '../utils/constants.js'


const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticated, setUser } = useContext(Context)
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  if (isAuthenticated === false) {
    navigate("/")
  }

    useEffect(()=> {
     axios
     .get(`${server}/users/userdetails`, {
       withCredentials: true,
     })
     .then((res) => {
       setUser(res.data.user)
       console.log(res.data.user);

     })
     .catch((error) => {
      setUser({}),
      error.response.data.message;
     });
    }, [])
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home