import { Box } from '@mui/material'
import React from 'react'

const CustomBox = ({children, className, ...props}) => {
  return (
    <Box className={`${className ? className : ''}`} {...props}>
        {children}
    </Box>
  )
}

export default CustomBox
