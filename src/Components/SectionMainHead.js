import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainHead:{
    marginTop: '20px !important',
    [theme.breakpoints.down('md')]:{
      marginTop: '15px !important'
    },
    [theme.breakpoints.down('sm')]:{
      marginTop: '12px !important'
    },
  },
}))

const SectionMainHead = ({children, className, ...props}) => {
  const classes = useStyles(); 
  return (
    <Typography variant='h4' component='h4' className={`${classes.mainHead}  ${classes.className ? classes.className : ''}`} {...props} sx={{width: '100%', textAlign: 'center'}}>
        {children}
    </Typography>
  )
}

export default SectionMainHead
