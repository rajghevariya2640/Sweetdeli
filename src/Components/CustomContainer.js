import { Container } from '@mui/material'
import React from 'react'

const CustomContainer = ({children, className, ...props}) => {
  return (
    <Container className={`${className ? className : ''}`} {...props}>
        {children}
    </Container>
  )
}

export default CustomContainer
