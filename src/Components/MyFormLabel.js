import styled from '@emotion/styled'
import { FormLabel } from '@mui/material'
import React from 'react'


const MyLable = styled(FormLabel)(({ theme }) => ({
    '&.MuiFormLabel-root':{
      top: -5,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'poppins',
      textTransform: 'uppercase',
      color: theme.palette.gray.cardBorder,
    },
  }))

const MyFormLabel = ({children, className, ...props}) => {
  return (
    <MyLable className={`${className ? className : ''}`} {...props}>
      {children}
    </MyLable>
  )
}

export default MyFormLabel
