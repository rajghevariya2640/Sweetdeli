import { ListItemIcon } from '@mui/material'
import React from 'react'

const CustomListIcon = ({children, className, ...props}) => {
  return (
    <ListItemIcon className={`${className ? className : ''}`} {...props}>
        {children}
    </ListItemIcon>
  )
}

export default CustomListIcon
