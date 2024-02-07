import { Grid } from '@mui/material'
import React from 'react'

const CustomCol = ({children, className, ...props}) => {
  return (
    <Grid item className={`${className ? className : ''}`} {...props} >
        {children}
    </Grid>
  )
}

export default CustomCol
