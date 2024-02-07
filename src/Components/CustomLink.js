import { makeStyles } from '@mui/styles';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    cstmLink:{
            textDecoration: 'none !important',
        '&:hover':{
            cursor: 'pointer',
        },
    },
}))

const CustomLink = ({children, className, ...props}) => {

        const classes = useStyles(); 

  return (
    <NavLink className={`${classes.cstmLink} ${className ? className : ''}`} {...props}>
        {children}
    </NavLink>
  )
}

export default CustomLink
