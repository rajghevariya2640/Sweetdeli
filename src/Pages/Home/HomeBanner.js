import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomContainer from '../../Components/CustomContainer'
import CustomSection from '../../Components/CustomSection'
import CustomTypography from '../../Components/CustomTypography'
import HomeBG from '../../image/HomeBG.jpg'

const useStyles = makeStyles((theme) => ({
    homeBanner:{
        background: `url(${HomeBG})`,
        minHeight: '50rem',
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        [theme.breakpoints.down('lg')]:{
            minHeight: 0,
        },
        '& img':{
            width: '100%',
            objectFit: 'cover'
        },
    },
    bannerContent:{
        maxWidth: 540,
        '& .MuiTypography-h1':{
            marginBottom: 32,
        },
        '& .MuiTypography-body1':{
            marginBottom: 52,
            color: theme.palette.dark.dark,
        },
    },
    bannerBtnMain:{
        [theme.breakpoints.down('sm')]:{
            textAlign: 'center'
        },
    },
}))

const HomeBanner = () => {

    const classes = useStyles(); 

    return (
        <CustomSection className={classes.homeBanner}>
            <CustomContainer maxWidth='md'>
                <CustomBox className={classes.bannerContent}>
                    <CustomTypography variant={'h1'} component={'h1'}>Bibendum et sit aliquam!</CustomTypography>
                    <CustomTypography variant={'body1'} component={'p'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viver nulla mattis scelerisque. Eget cras integer.</CustomTypography>
                    <CustomBox className={classes.bannerBtnMain}>
                        <CustomButton variant='contained'>Discover Menu</CustomButton>
                    </CustomBox>
                </CustomBox>
            </CustomContainer>
        </CustomSection>
    )
}

export default HomeBanner
