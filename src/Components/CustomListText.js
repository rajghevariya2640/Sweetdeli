import { ListItemText } from '@mui/material'
import React from 'react'

const CustomListText = ({children, className, ...props}) => {
  return (
    <ListItemText className={`${className ? className : ''}`} {...props}>
        {children}
    </ListItemText>
  )
}

export default CustomListText
