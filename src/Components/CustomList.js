import { List } from '@mui/material'
import React from 'react'

const CustomList = ({children, className, ...props}) => {
  return (
    <List className={`${className ? className : ''}`} {...props}>
        {children}
    </List>
  )
}

export default CustomList
