import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    spacer:{
      paddingTop: 60,
      paddingBottom: 80,
      [theme.breakpoints.down('lg')]:{
        padding: [[50,0]]
      },
      [theme.breakpoints.down('md')]:{
        padding: [[30,0]]
      },
    }
}))

const CustomSection = ({children, className, ...props}) => {
  const classes = useStyles(); 
  return (
    <div className={`${classes.spacer}  ${className ? className : ''}`} {...props}>
      {children}
    </div>
  )
}

export default CustomSection
