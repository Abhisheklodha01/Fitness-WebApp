import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner.js'
import SearchExercises from '../components/SearchExercises.js'
import Exercises from '../components/Exercises.js'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index.js'


const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useContext(Context)
  if (isAuthenticated === false) {
    navigate("/")
  }
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
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