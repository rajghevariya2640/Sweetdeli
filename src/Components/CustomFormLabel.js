import { FormLabel } from '@mui/material'
import React from 'react'

const CustomFormLabel = (children, className, ...props) => {
  return (
    <FormControlLabel className={`${className ? className : ''}`} {...props}>
        {children}
    </FormControlLabel>
  )
}

export default CustomFormLabel
