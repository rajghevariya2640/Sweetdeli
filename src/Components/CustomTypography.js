import { Typography } from '@mui/material'
import React from 'react'

const CustomTypography = ({children, className, ...props}) => {
  return (
    <Typography className={`${className ? className : ''}`} {...props}>
        {children}
    </Typography>
  )
}

export default CustomTypography
