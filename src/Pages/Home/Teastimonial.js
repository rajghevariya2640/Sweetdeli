import { makeStyles } from '@mui/styles';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import CustomBox from '../../Components/CustomBox';
import CustomContainer from '../../Components/CustomContainer';
import CustomNavigation from '../../Components/CustomNavigation';
import CustomRow from '../../Components/CustomRow';
import CustomSwiper from '../../Components/CustomSwiper';
import CustomTypography from '../../Components/CustomTypography';
import SectionMainHead from '../../Components/SectionMainHead';
import SectionSubHead from '../../Components/SectionSubHead';
import Customer1 from '../../image/Customer1.jpg';
import Customer2 from '../../image/Customer2.jpg';
import Customer3 from '../../image/Customer3.jpg';
import CustomAvatar from '../../Components/CustomAvatar';

const useStyles = makeStyles((theme) => ({
    testimonialMain:{
        '& .MuiContainer-root':{
            position: 'relative',
            [theme.breakpoints.down('sm')]:{
                padding: '0 !important'
            },
        },
        '& img':{
            width: '100%',
            objectFit: 'cover',
        },
    },
    testimonialRow:{
        marginTop: 40,
        [theme.breakpoints.down('sm')]:{
            padding: [[0,49,30,49]]
        },
    },
    testimonialSlider:{
        paddingBottom: 62,
        '& .swiper-pagination':{
            '& .swiper-pagination-bullet-active':{
                background: theme.palette.primary.main,
            }
        },
    },
    singleTestimonial:{
        padding: [[30,22,35,22]],
        backgroundColor: theme.palette.gray.testimonialBG,
        borderRadius: 20,
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            backgroundColor: theme.palette.light.sectionColor
        },
        [theme.breakpoints.down('sm')]:{
            padding: [[16,13,25,17]],
        },
    },
    reviewInfo:{
        '&.MuiTypography-root':{
            fontSize: 20,
            lineHeight: '150%',
            fontFamily: 'Lato',
            letterSpacing: 0,
            [theme.breakpoints.down('lg')]:{
                fontSize: 18
            },
            [theme.breakpoints.down('md')]:{
                fontSize: 16
            },
        },
    },
    customerInfo:{
        display: 'flex',
        gap: [[0,20]],
        marginTop: 45,
        [theme.breakpoints.down('sm')]:{
            gap: [[0,17]],
            marginTop: 25,
        },
        '& .MuiTypography-h6':{
            fontSize: 20,
            fontFamily: 'lato',
            fontWeight: 700,
            color: theme.palette.dark.featureHead,
            marginBottom: 5,
            [theme.breakpoints.down('sm')]:{
                fontSize: 16,
            },
        },
        '& .MuiTypography-body1':{
            color: theme.palette.dark.dark555,
            fontSize: 15,
            fontFamily: 'Lato',
            lineHeight: '133%',
            wordBreak: 'break-word',
            [theme.breakpoints.down('sm')]:{
                fontSize: 14,
            },
        }
    },
    testimonialNav :{
        '&.MuiBox-root': {
            top: '50% ',
            left: '0%',
            zIndex: 9,
            justifyContent: 'space-between',
            width: '100%',
            [theme.breakpoints.down('md')]:{
                position: 'absolute',
                top: '50%',
                left: 'unset',
                marginTop: '0'
            },
            '& .custom-prev':{
                marginLeft: -72,
                [theme.breakpoints.down('xxl')]:{
                    marginLeft: -26
                },
                [theme.breakpoints.down('xl')]:{
                    marginLeft: -14
                },
                [theme.breakpoints.down('lg')]:{
                    marginLeft: -25
                },
                [theme.breakpoints.down('md')]:{
                    marginLeft: -16
                },
                [theme.breakpoints.down('sm')]:{
                    marginLeft: 7
                },
            },
            '& .custom-next':{
                marginRight: -72,
                [theme.breakpoints.down('xxl')]:{
                    marginRight: -26
                },
                [theme.breakpoints.down('xl')]:{
                    marginRight: -14
                },
                [theme.breakpoints.down('lg')]:{
                    marginRight: -25
                },
                [theme.breakpoints.down('md')]:{
                    marginRight: -16
                },
                [theme.breakpoints.down('sm')]:{
                    marginRight: 7
                },
            },
        }
    }
}))

const Teastimonial = () => {
    
    const classes = useStyles(); 
    

    const Testimonial = [
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer1,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer2,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer3,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer1,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer2,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer2,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
        {
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.',
            customer: Customer2,
            name: 'Cha Ji-Hun',
            info: 'Amet phasellus interdum.',
        },
    ]

  return (
    <CustomBox className={classes.testimonialMain}>
        <CustomContainer maxWidth='md'>
            <SectionSubHead>Testimonials</SectionSubHead>
            <SectionMainHead>What’s our customer says?</SectionMainHead>
            <CustomNavigation prevClass="bestPrev" nextClass="bestNext" className={classes.testimonialNav} />
            <CustomRow className={classes.testimonialRow}>
                <CustomSwiper 
                    slidesPerView={3} 
                    spaceBetween={32} 
                    navigation={{
                        nextEl: '.bestNext',
                        prevEl: '.bestPrev',
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation,Pagination]} 
                    className={`mySwiper ${classes.testimonialSlider}`}
                    breakpoints={{
                        1440:{
                            slidesPerView: 3
                        },
                        1200:{
                            slidesPerView: 2.5
                        },
                        991:{
                            slidesPerView: 2
                        },
                        768:{
                            slidesPerView: 1.75
                        },
                        0:{
                            slidesPerView: 1
                        },
                    }}
                >
                     
                    {
                        Testimonial.map((data , index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <CustomBox  className={classes.singleTestimonial}>
                                        <CustomTypography className={classes.reviewInfo}>{data.review}</CustomTypography>
                                        <CustomBox className={classes.customerInfo}>
                                            <CustomBox className={classes.customerImage}>
                                                <CustomAvatar src={data.customer} alt='Customer' sx={{ width: 60, height: 60 }} />
                                            </CustomBox>
                                            <CustomBox>
                                                <CustomTypography variant={'h6'} component={'p'} className={classes.customerName}>{data.name}</CustomTypography>
                                                <CustomTypography className={classes.customerDetail}>{data.info}</CustomTypography>
                                            </CustomBox>
                                        </CustomBox>
                                    </CustomBox>
                                </SwiperSlide>
                            )
                        })
                    }
                </CustomSwiper>
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default Teastimonial
