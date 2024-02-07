import React from 'react'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomBox from '../../Components/CustomBox'
import { makeStyles } from '@mui/styles'
import CustomTypography from '../../Components/CustomTypography'
import Cake1 from '../../image/Cupcake1.jpg'
import Cake2 from '../../image/Cupcake2.jpg'
import Cake3 from '../../image/Cupcake3.jpg'
import CustomCol from '../../Components/CustomCol'
import { Stack } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    galleryMain:{
        padding: [[100,0]],
        [[theme.breakpoints.down('xl')]]:{
            padding: [[70,0,80,0]]
        },
        [[theme.breakpoints.down('md')]]:{
            padding: [[50,0,80,0]]
        },
        [[theme.breakpoints.down('sm')]]:{
            padding: [[35,0,80,0]]
        },
        '& img':{
            width: '100%',
            objectFit: 'cover'
        },
    },
    galleryHead:{
        '&.MuiTypography-h4':{
            [[theme.breakpoints.down('md')]]:{
                fontSize: 28,
                textAlign: 'start',
            },
            [[theme.breakpoints.down('sm')]]:{
                fontSize: 24,
            },
            textAlign: 'center',
            marginBottom: 20,
        },
    },
    gallerySubHead:{
        '&.MuiTypography-root':{
            textAlign: 'center',
            color: theme.palette.gray.footerLightGray,
            maxWidth: 420,
            margin: [[0,'auto']],
            [[theme.breakpoints.down('md')]]:{
                margin: 0,
                textAlign: 'start',
            },
        },
    },
    imageWrapper:{
        height: 310,
        [theme.breakpoints.down('xl')]:{
            height: 275,
        },
        [theme.breakpoints.down('md')]:{
            height: 225,
        },
        [theme.breakpoints.down('sm')]:{
            height: 175,
        },
        [theme.breakpoints.down('mdxs')]:{
            height: 131,
        },
        '& img':{
            height: '100%',
            borderRadius: 20,
            [theme.breakpoints.down('md')]:{
                borderRadius: 15,
            },
            [theme.breakpoints.down('sm')]:{
                borderRadius: 10,
            },
        },
    },
    imageGalleryWrapper:{
        marginTop: 92,
        [[theme.breakpoints.down('lg')]]:{
            marginTop: 80
        },
        [[theme.breakpoints.down('md')]]:{
            marginTop: 60
        },
        [[theme.breakpoints.down('sm')]]:{
            marginTop: 45
        },
    },
}))

const Gallary = () => {

    //Use Style
    const classes = useStyles(); 

    const gallery = [
        {
            image: Cake1,
        },
        {
            image: Cake2,
        },
        {
            image: Cake3,
        },
        {
            image: Cake2,
        },
        {
            image: Cake3,
        },
        {
            image: Cake1,
        },
        {
            image: Cake3,
        },
        {
            image: Cake1,
        },
        {
            image: Cake2,
        },
        {
            image: Cake1,
        },
        {
            image: Cake2,
        },
        {
            image: Cake3,
        },
    ]

    return (
        <CustomBox className={classes.galleryMain}>
            <CustomContainer maxWidth='md'>
                <CustomTypography variant={'h4'} component={'h4'} className={classes.galleryHead}>Our Gallery</CustomTypography>
                <CustomTypography variant={'body1'} component={'p'} className={classes.gallerySubHead}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ornare quam amet proin pulvinar.</CustomTypography>
                <CustomBox className={classes.imageGalleryWrapper}>
                    <CustomRow spacing={{xs:2, sm: 3,lg: 5}}>
                        {
                            gallery.map((data,index)=>{
                                return(
                                    <CustomCol xs={6} lg={4}>
                                        <CustomBox key={index} className={classes.imageWrapper}>
                                            <img src={data.image} alt={`Cake ${index}`} />
                                        </CustomBox>
                                    </CustomCol>
                                )
                            })
                        }
                    </CustomRow>
                </CustomBox>
            </CustomContainer>
        </CustomBox>
    )
}

export default Gallary
