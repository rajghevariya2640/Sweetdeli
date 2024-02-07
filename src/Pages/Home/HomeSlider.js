import { makeStyles } from '@mui/styles';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import CustomBox from '../../Components/CustomBox';
import CustomCol from '../../Components/CustomCol';
import CustomContainer from '../../Components/CustomContainer';
import CustomRow from '../../Components/CustomRow';
import CustomSwiper from '../../Components/CustomSwiper';
import CustomTypography from '../../Components/CustomTypography';
import Slide1 from '../../image/HomeSlide1.jpg';

const useStyles = makeStyles((theme) => ({
    homeSlideSection:{
        backgroundColor: theme.palette.light.sectionColor,
        '& img':{
            width: '100%',
            objectFit: 'cover',
        },
    },
    homeSlider:{
        paddingTop: '60px',
        paddingBottom: '80px',
        [theme.breakpoints.down('lg')]:{
            paddingTop: 50,
            paddingBottom: 0,
        },
        [theme.breakpoints.down('md')]:{
            paddingTop: 30,
        },
        '& .swiper-pagination':{
            [theme.breakpoints.down('lg')]:{
                display: 'none'
            },
            '& .swiper-pagination-bullet-active':{
                background: theme.palette.primary.main,
            }
        },
    },
    sliderImageMain:{
        '&.MuiGrid-root':{
            [theme.breakpoints.down('lg')]:{
                order: 2,
                marginTop: 20
            },
        },
    },
    sliderImage:{
        borderRadius: 20,
        height: '100%'
    },
    sliderContent:{
        '&.MuiGrid-root':{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
    slideInfo:{
        '&.MuiTypography-root':{
            marginTop: 32,
            maxWidth: 540,
            color: theme.palette.primary.main
        },
    },
})) 

const HomeSlider = () => {

    const classes = useStyles(); 

    const homeSlide = [
        {
            slideImg: Slide1,
            slideHead: 'Nibh in dolor bibendum.',
            slideInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.'
        },
        {
            slideImg: Slide1,
            slideHead: 'Nibh in dolor bibendum.',
            slideInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.'
        },
        {
            slideImg: Slide1,
            slideHead: 'Nibh in dolor bibendum.',
            slideInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.'
        },
        {
            slideImg: Slide1,
            slideHead: 'Nibh in dolor bibendum.',
            slideInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.'
        },
        {
            slideImg: Slide1,
            slideHead: 'Nibh in dolor bibendum.',
            slideInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.'
        },
    ]

  return (
    <CustomBox className={classes.homeSlideSection}>
        <CustomContainer maxWidth='md'>
            <CustomSwiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className={`${classes.homeSlider}`}
            >
                {
                    homeSlide.map((data , index)=> {
                        return(
                            <SwiperSlide key={index}>
                                <CustomRow spacing={{lg: 5}}>
                                    <CustomCol xs={12} lg={6} className={classes.sliderImageMain}>
                                        <img src={data.slideImg} alt='Slide 1' className={classes.sliderImage} />
                                    </CustomCol>
                                    <CustomCol xs={12} lg={6} className={classes.sliderContent}>
                                        <CustomTypography variant={'h2'} component={'h2'}>{data.slideHead}</CustomTypography>
                                        <CustomTypography variant={'body1'} component={'p'} className={classes.slideInfo}>{data.slideInfo}</CustomTypography>
                                    </CustomCol>
                                </CustomRow>
                            </SwiperSlide>
                        )
                    })
                }
            </CustomSwiper>
        </CustomContainer>
    </CustomBox>
  )
}

export default HomeSlider
