import { Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  cstmSelect:{
    '& .MuiOutlinedInput-notchedOutline':{
      border: 'none'
    },
    '& .MuiSelect-select':{
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      fontSize: 14,
      [theme.breakpoints.down('lg')]:{
        fontSize: 14,
      },
      [theme.breakpoints.down('sm')]:{
          fontSize: 12,
      }, 
      '& svg':{
        paddingRight: 10,
        fill: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]:{
          paddingRight: 4,
          height: 18,
          width: 18,
        },
      },
    },
  },
  languageName:{
    '&.MuiButtonBase-root':{
      '& svg':{
        paddingRight: 10,
        fill: theme.palette.primary.main,
      },
    }
  },
}))

const CustomSelect = ({children, className, IconComponent, ...props}) => {
  
  const classes = useStyles(); 
  
  return (
    <Select className={`${classes.cstmSelect} ${className ? className : ''}`} IconComponent={IconComponent} {...props}>
        {children}
    </Select>
  )
}

export default CustomSelect
