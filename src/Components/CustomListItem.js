import { ListItem } from '@mui/material'
import React from 'react'

const CustomListItem = ({children, className, ...props}) => {
  return (
    <ListItem className={`${className ? className : ''}`} {...props}>
        {children}
    </ListItem>
  )
}

export default CustomListItem
