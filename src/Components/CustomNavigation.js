import React from 'react'
import { CustomNextArrow, CustomPrevArrow } from './CustomArrow'
import CustomBox from './CustomBox'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    NavigationMain:{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        gap: 8,
        position: 'absolute',
        top: 0,
        right: 0,
        [theme.breakpoints.down('md')]:{
            position: 'static',
            justifyContent: 'center',
            marginTop: 34,
            marginLeft: -30,
        },
        [theme.breakpoints.down('mdxs')]:{
            marginLeft: 0,
        },
        '& svg':{
            borderRadius: 50,
            padding: 8,
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]:{
                padding: 5
            },
            '&:hover':{
                border: `1px solid ${theme.palette.gray.headerBorder}`,
                cursor: 'pointer',
            },
        }
    }
}))

const CustomNavigation = ({className, ...props}) => {

    const classes = useStyles(); 

    return (
        <CustomBox className={`${classes.NavigationMain} ${className}`} {...props}>    
            <CustomBox className={`custom-prev ${props.prevClass}`}>
                <CustomPrevArrow />
            </CustomBox>
            <CustomBox className={`custom-next ${props.nextClass}`}>
                <CustomNextArrow />
            </CustomBox>
        </CustomBox>
    )
}

export default CustomNavigation
