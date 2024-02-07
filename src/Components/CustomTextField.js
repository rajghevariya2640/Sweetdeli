import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  myInput:{
    '& .MuiInputBase-root':{
      borderRadius: 6,
      overflow: 'hidden',
      '& .MuiInputBase-input':{
        padding: [[14,16]],
        [theme.breakpoints.down('mdxs')]:{
          padding: 12,
        },
        '&::placeholder':{
          fontWeight: 500
        },
      },
    },
    '& .MuiFilledInput-root':{
      '&::after':{
        border: 'none',
      },
      '&::before':{
        border: 'none !important',
      },
      '& .MuiFilledInput-input':{
        backgroundColor: theme.palette.gray.inputBG,
        fontFamily: 'inter',
        '&::placeholder':{
          color: theme.palette.dark.dark,
          fontSize: 15,
          [theme.breakpoints.down('sm')]:{
            fontSize: 13
          },
        },
      },
    },
    '& .MuiOutlinedInput-root':{
      '& .MuiOutlinedInput-input':{
        fontFamily: 'poppins',
        '&::placeholder':{
          color: theme.palette.dark.dark,
          fontSize: 15,
          [theme.breakpoints.down('sm')]:{
            fontSize: 13
          },
        },
      },
      '&.Mui-focused':{
        '& .MuiOutlinedInput-notchedOutline':{
          borderColor: theme.palette.dark.inputBorder, 
          borderWidth: 1,
        },
      },
    },
  },

}))

const CustomTextField = ({children, className, ...props}) => {

  const classes = useStyles(); 

  return (
    <TextField className={`${classes.myInput} ${className? className : ''}`} {...props}>
        {children}
    </TextField>
  )
}

export default CustomTextField
