import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
const Btn = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root':{
      borderColor: theme.palette.lightBtn.main,
      color: theme.palette.lightBtn.contrastText,
      borderWidth: 2,
    },
  }))
const LDbtn = ({children, className, ...props}) => {
  return (
    <Btn className={`${className ? className : ''}`} {...props}>
      {children}
    </Btn>
  )
}

export default LDbtn
