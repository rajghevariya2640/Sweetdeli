import { Typography } from '@mui/material'
import React from 'react'

const SectionSubHead = ({children, className, ...props}) => {
  return (
    <Typography variant='h6' component='h4' className={`${className ? className : ''}`} {...props} {...props} sx={{width: '100%', textAlign: 'center', fontWeight: '400'}}>
        {children}
    </Typography>
  )
}

export default SectionSubHead
