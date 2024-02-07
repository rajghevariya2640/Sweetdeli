import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

  const useStyles = makeStyles((theme) => ({
    cstmCard:{
      '&.MuiPaper-root':{
        borderRadius: 20,
        border: `1px solid ${theme.palette.gray.cardBorder}`,
        boxShadow: 'none',
      },
    },
  }))

const CustomCard = ({children, className, ...props}) => {

      const classes = useStyles(); 

  return (
    <Card className={`${classes.cstmCard} ${className ? className : ''}`} raised={false} {...props}>
        {children}
    </Card>
  )
}

export default CustomCard
