import React from 'react'
import CustomTextField from './CustomTextField'
import styled from '@emotion/styled'


const MyInput = styled(CustomTextField)(({ theme }) => ({
  '&.MuiTextField-root':{
    width: '100%'
  },
    '& .MuiInputBase-root':{
        borderRadius: 12,
        border: `2px solid ${theme.palette.gray.headerBorder}`,
        '& .MuiOutlinedInput-input':{
            fontSize: 14,
            '&::placeholder':{
                fontSize: 14,
                color: theme.palette.secondary.main,
                opacity: 1,
            },
        },
        '& fieldset':{
            borderWidth: 0,
        },
        '&.Mui-focused':{
            border: `2px solid ${theme.palette.dark.dark93}`,
            '& .MuiOutlinedInput-notchedOutline':{
                borderWidth: 0,
            },
        },
    },
  }))

const MyTextField = ({children, className, ...props}) => {
  return (
    <MyInput className={`${className ? className : ''}`} {...props}>
      {children}
    </MyInput>
  )
}

export default MyTextField
