import { Stack } from '@mui/material'
import React from 'react'

const CustomStack = ({children, className, ...porps}) => {
  return (
    <Stack className={`${className ? className : ''}`} {...porps}>
        {children}
    </Stack>
  )
}

export default CustomStack
