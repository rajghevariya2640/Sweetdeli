import { useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomCard from '../../Components/CustomCard'
import CustomContainer from '../../Components/CustomContainer'
import CustomLink from '../../Components/CustomLink'
import CustomNavigation from '../../Components/CustomNavigation'
import CustomSection from '../../Components/CustomSection'
import CustomSwiper from '../../Components/CustomSwiper'
import CustomTypography from '../../Components/CustomTypography'
import SectionMainHead from '../../Components/SectionMainHead'
import SectionSubHead from '../../Components/SectionSubHead'
import cake1 from '../../image/Cupcake1.jpg'
import cake2 from '../../image/Cupcake2.jpg'

const useStyles = makeStyles((theme) => ({
    cakeMain:{
        '& img':{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '& .MuiContainer-root':{
            [theme.breakpoints.down('md')]:{
                padding: '0 !important',
                paddingLeft: '30px !important',
            },
            [theme.breakpoints.down('smxs')]:{
                padding: '0px 15px !important',
            },
        },
    },
    cakeSlider:{
        paddingTop: 50,
        [theme.breakpoints.down('md')]:{
            paddingTop: 30
        },
    },
    cakeImage:{
        height: 300 ,
        [theme.breakpoints.down('lg')]:{
            height: 250
        },
        [theme.breakpoints.down('md')]:{
            height: 225
        },
        [theme.breakpoints.down('mdxs')]:{
            height: 180
        },
    },
    cakeCardWrapper:{
        '&.MuiBox-root':{
            padding: [[40,25,25,25]],
            [theme.breakpoints.down('sm')]:{
                padding: 20
            },
            [theme.breakpoints.down('sm')]:{
                padding: [[12,13,15,13]]
            },
        },
    },
    cakeCardTitle:{
        '&.MuiTypography-root':{
            fontWeight: 500,
            color: theme.palette.primary.main,
        },
    },
    cakeCardInfo:{
        '&.MuiTypography-root':{
            fontSize: 12,
            fontFamily: 'poppins',
            marginTop: 8,
            color: theme.palette.primary.main,
            [theme.breakpoints.down('md')]:{
                marginTop: 4,
            },
        },
    },
    cakeInfoWrapper:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    priceBox:{
        '&.MuiTypography-root':{
            padding: 8,
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            borderRadius: 4,
            fontWeight: 500,
            [theme.breakpoints.down('md')]:{
                padding: [[2,8]],
            },
        },
    },
    cakeCardBtn:{
        '&.MuiButtonBase-root':{
            padding: [[12,34]],
            marginTop: 20,
            fontSize: 14,
            [theme.breakpoints.down('md')]:{
                width: '100%'
            },
        },
    },
}))

const ExclusiveCake = () => {

    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const isLargeScreen = useMediaQuery('(min-width:768px)');

    const ourCake = [
        {
            cakeImage: cake1,
            cakeTitle: 'Neque volutpat morbi.',
            cakeInfo: 'Et blandit non sit ac egestas risus non.',
            cakePrice: '$20'
        },
        {
            cakeImage: cake2,
            cakeTitle: 'Neque volutpat morbi.',
            cakeInfo: 'Et blandit non sit ac egestas risus non.',
            cakePrice: '$20'
        },
        {
            cakeImage: cake1,
            cakeTitle: 'Neque volutpat morbi.',
            cakeInfo: 'Et blandit non sit ac egestas risus non.',
            cakePrice: '$20'
        },
        {
            cakeImage: cake2,
            cakeTitle: 'Neque volutpat morbi.',
            cakeInfo: 'Et blandit non sit ac egestas risus non.',
            cakePrice: '$20'
        },
        {
            cakeImage: cake1,
            cakeTitle: 'Neque volutpat morbi.',
            cakeInfo: 'Et blandit non sit ac egestas risus non.',
            cakePrice: '$20'
        },
    ]

    const classes = useStyles(); 

    
  return (
    <CustomSection className={classes.cakeMain}>
        <CustomContainer maxWidth='md'>
            <SectionSubHead>Most Popular</SectionSubHead>
            <SectionMainHead>Our Exclusive Cakes</SectionMainHead>
            <CustomSwiper 
                slidesPerView={3} 
                spaceBetween={30} 
                navigation={{
                    nextEl: '.bestNext1',
                    prevEl: '.bestPrev1',
                  }}
                modules={[Navigation]} 
                className={classes.cakeSlider}
                breakpoints={{
                    1440:{
                        slidesPerView: 3,
                    },
                    1200:{
                        slidesPerView: 2.75,
                    },
                    991:{
                        slidesPerView: 2.5,
                    },
                    767:{
                        slidesPerView: 1.75
                    },
                    425:{
                        slidesPerView: 1.5
                    },
                    375:{
                        spaceBetween: 20,
                        slidesPerView: 1.25
                    },
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
            >
                <CustomNavigation prevClass="bestPrev1" nextClass="bestNext1" />
                {
                    ourCake.map((data , index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <CustomCard className={classes.cakeCard}>
                                    <CustomBox className={classes.cakeImage}>
                                        <img src={data.cakeImage} alt='Cup Cake'  />
                                    </CustomBox>
                                    <CustomBox className={classes.cakeCardWrapper}>
                                        <CustomBox className={classes.cakeInfoWrapper}>
                                            <CustomBox>
                                                <CustomTypography variant={'body1'} component={'p'} className={classes.cakeCardTitle}>{data.cakeTitle}</CustomTypography>
                                                {isLargeScreen&&(
                                                    <CustomTypography variant={'subtitle2'} component={'p'} className={classes.cakeCardInfo} >{data.cakeInfo}</CustomTypography>
                                                )}
                                            </CustomBox>
                                            <CustomBox>
                                                <CustomTypography  className={classes.priceBox}>{data.cakePrice}</CustomTypography>
                                            </CustomBox>
                                        </CustomBox>
                                        {isSmallScreen&&(
                                            <CustomTypography variant={'subtitle2'} component={'p'} className={classes.cakeCardInfo} >{data.cakeInfo}</CustomTypography>
                                        )}
                                        <CustomLink to='/product'>
                                            <CustomButton variant='contained' className={classes.cakeCardBtn}>Order now</CustomButton>
                                        </CustomLink>
                                    </CustomBox>
                                </CustomCard>
                            </SwiperSlide>
                        )
                    })
                }
            </CustomSwiper>
        </CustomContainer>
    </CustomSection>
  )
}

export default ExclusiveCake
