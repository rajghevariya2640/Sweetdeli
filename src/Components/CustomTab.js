import { Tab } from '@mui/material'
import React from 'react'

const CustomTab = ({children, className, ...props}) => {
  return (
    <Tab className={`${className ? className : ''}`} {...props}>
        {children}
    </Tab>
  )
}

export default CustomTab
