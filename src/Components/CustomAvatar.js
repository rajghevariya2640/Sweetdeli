import { Avatar } from '@mui/material'
import React from 'react'

const CustomAvatar = ({children, className, ...props}) => {
  return (
    <Avatar className={`${className ? className : ''}`} {...props}>
        {children}
    </Avatar>
  )
}

export default CustomAvatar
