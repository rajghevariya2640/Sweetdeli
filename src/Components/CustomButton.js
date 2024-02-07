
import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({children, className, ...props}) => {
  return (
    <Button className={`${className ? className : ''}`} disableElevation {...props}>
        {children}
    </Button>
  )
}

export default CustomButton
