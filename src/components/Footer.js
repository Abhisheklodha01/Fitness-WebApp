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
        src='https://i.pinimg.com/736x/02/91/32/029132c8642f5f5d61f61213426e38d1.jpg'
         alt='logo'
         width="100px"
         height="80px"
         style={{mixBlendMode:'multiply'}}
         />
         <Typography
           variant='h5'
           mt="20px"
           pb="40px"
          >
          Made with ❤️ by Abhishek Lodha
         </Typography>

      </Stack>

    </Box>
  )
}

export default Footer