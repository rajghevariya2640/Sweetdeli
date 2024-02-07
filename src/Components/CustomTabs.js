import { Tabs } from '@mui/material'
import React from 'react'

const CustomTabs = ({children, className, ...props}) => {
  return (
    <Tabs className={`${className ? className : ''}`} {...props}>
        {children}
    </Tabs>
  )
}

export default CustomTabs
