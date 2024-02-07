import { Menu } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  menu:{
    '& .MuiPaper-root':{  
      borderRadius: 15,
      width: '100%',
      boxShadow: '0px 0px 64px  rgba(15, 15, 15, 0.4)',
      overflow: 'visible',
    },
  },
}))

const CustomMenu = ({children, className, ...props}) => {

  const classes = useStyles(); 

  return (
    <Menu className={`${classes.menu} ${className ? className : ''}`} {...props}>
        {children}
    </Menu>
  )
}

export default CustomMenu
