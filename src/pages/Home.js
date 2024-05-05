import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner.js'
import SearchExercises from '../components/SearchExercises.js'
import Exercises from '../components/Exercises.js'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index.js'


const Home = () => {
  
  const navigate = useNavigate()
  const { isAuthenticated, setUser} = useContext(Context)
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  if (
    isAuthenticated === true &&
    window.location.pathname.startsWith("/")
  ) {
    navigate("/home");
  } 

  if(isAuthenticated === false) {
    navigate("/")
  }
  
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