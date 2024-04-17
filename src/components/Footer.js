import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box
     mt="80px"
     bgcolor="#eeaeca"
    >
      <Stack
       gap="40px"
       alignItems="center"
       px="40px"
       pt="24px"
      >
        <img 
        src='https://static.vecteezy.com/system/resources/previews/009/130/901/non_2x/jsr-logo-jsr-letter-jsr-letter-logo-design-initials-jsr-logo-linked-with-circle-and-uppercase-monogram-logo-jsr-typography-for-technology-business-and-real-estate-brand-vector.jpg'
         alt='logo'
         width="100px"
         height="80px"
         className='rounded-lg'
         />
         <Typography
           variant='h5'
           mt="20px"
           pb="40px"
          >
          Made with ❤️ by JSR Team
         </Typography>

      </Stack>

    </Box>
  )
}

export default Footer