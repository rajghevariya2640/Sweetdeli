import { Grid } from '@mui/material'
import React from 'react'


const CustomRow = ({children, className, ...props}) => {
  return (
    <Grid container className={`${className ? className : ''}`} {...props}>
        {children}
    </Grid>
  )
}

export default CustomRow
