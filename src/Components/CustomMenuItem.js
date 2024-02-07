import { MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  menuItem:{
    '&.MuiMenuItem-root':{ 
      '&.MuiButtonBase-root':{
        fontFamily: 'poppins', 
        fontSize: 14,
      },
      '&.Mui-selected':{
        backgroundColor: theme.palette.light.main,
      },
      '& svg':{
        paddingRight: 10,
        [theme.breakpoints.down('sm')]:{
          paddingRight: 4
        },
      },
    },
  },
}))

const CustomMenuItem = ({children, className, ...props}) => {

  const classes = useStyles(); 

  return (
    <MenuItem className={`${classes.menuItem} ${className ? className : ''}`} {...props}>
        {children}
    </MenuItem>
  )
}

export default CustomMenuItem
