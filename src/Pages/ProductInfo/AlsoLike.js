import StarRateIcon from '@mui/icons-material/StarRate'
import { makeStyles } from '@mui/styles'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation , Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomNavigation from '../../Components/CustomNavigation'
import CustomRow from '../../Components/CustomRow'
import CustomSection from '../../Components/CustomSection'
import CustomSwiper from '../../Components/CustomSwiper'
import MyCard from '../../Components/MyCard'
import SectionMainHead from '../../Components/SectionMainHead'
import cake1 from '../../image/Cupcake1.jpg'
import cake2 from '../../image/Cupcake2.jpg'
import cake3 from '../../image/Cupcake3.jpg'
import cake4 from '../../image/VideoPoster.jpg'
import { useMediaQuery } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    cardSliderMain:{
        padding: '0',
        paddingTop: 42
    },
    sliderHeadMain:{
        [theme.breakpoints.down('md')]:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        },
        '& .MuiTypography-h4':{
            marginTop: '0 !important',
            textAlign: 'left'
        },
    },
    cardSlider:{
        paddingBottom: 42,
        marginTop: 50,
        [theme.breakpoints.down('md')]:{
            marginTop: 30
        },
        [theme.breakpoints.down('sm')]:{
            marginTop: 21
        },
        '& .swiper-pagination':{
            '& .swiper-pagination-bullet-active':{
                background: theme.palette.primary.main,
            }
        },
    },
    alsoLikeNav:{
        top: '50% ',
        left: '0%',
        zIndex: 9,
        justifyContent: 'space-between',
        width: '100%',
        [theme.breakpoints.down('md')]:{
            position: 'unset',
            marginTop: '0',
            justifyContent: 'end',
            width: '50%'
        },
        '& .custom-prev':{
            marginLeft: -72,
            [theme.breakpoints.down('xxl')]:{
                marginLeft: -50
            },
            [theme.breakpoints.down('xl')]:{
                marginLeft: -42
            },
            [theme.breakpoints.down('lg')]:{
                marginLeft: -42
            },
            [theme.breakpoints.down('md')]:{
                marginLeft: 0
            },
        },
        '& .custom-next':{
            marginRight: -72,
            [theme.breakpoints.down('xxl')]:{
                marginRight: -50
            },
            [theme.breakpoints.down('xl')]:{
                marginRight: -42
            },
            [theme.breakpoints.down('lg')]:{
                marginRight: -42
            },
            [theme.breakpoints.down('md')]:{
                marginRight: 0
            },
        },
    },
}))

const AlsoLike = () => {

    const classes = useStyles(); 

    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const isLargeScreen = useMediaQuery('(min-width:768px)');

    const cardSlider =[
        [
            {
                cakeImage: cake2,
                Name: 'Pinapple Cheesecake',
                Price: '$20.00',
                starValue :5, 

            }
        ],
        [
            {
                cakeImage: cake3,
                Name: 'Strawbery Cheesecake',
                Price: '$20.00',
                starValue :4, 

            }
        ],
        [
            {
                cakeImage: cake4,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :3, 

            }
        ],
        [
            {
                cakeImage: cake1,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 

            }
        ],
        [
            {
                cakeImage: cake2,
                Name: 'Pinapple Cheesecake',
                Price: '$20.00',
                starValue :3, 

            }
        ],
        [
            {
                cakeImage: cake3,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :5, 

            }
        ],
        [
            {
                cakeImage: cake4,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 

            }
        ],
        [
            {
                cakeImage: cake1,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 

            }
        ],
    ]

  return (
    <CustomSection className={classes.cardSliderMain}>
        <CustomContainer maxWidth='md'>
            <CustomRow position='relative'>
                <CustomBox className={classes.sliderHeadMain}>
                    <SectionMainHead>You may also like</SectionMainHead>
                    {isSmallScreen && (
                        <CustomNavigation prevClass="bestPrev" nextClass="bestNext" className={classes.alsoLikeNav} />
                    )}
                </CustomBox>
                    {isLargeScreen && (
                        <CustomNavigation prevClass="bestPrev" nextClass="bestNext" className={classes.alsoLikeNav} />
                    )}
                <CustomSwiper
                    slidesPerView={4} 
                    spaceBetween={32} 
                    navigation={{
                        nextEl: '.bestNext',
                        prevEl: '.bestPrev',
                    }}
                    modules={[Navigation , Pagination]} 
                    className={classes.cardSlider}
                    breakpoints={{
                        1200:{
                            slidesPerView: 4,
                        },
                        991:{
                            slidesPerView: 3,
                        },
                        375:{
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        0:{
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                    }}
                >
                    {
                        cardSlider.map((data,sliderIndex)=>{
                            return(
                                <SwiperSlide key={sliderIndex}>
                                    <MyCard cakeCard={data} />
                                </SwiperSlide>
                            )
                        })
                    }
                </CustomSwiper>
            </CustomRow>
        </CustomContainer>
    </CustomSection>
  )
}

export default AlsoLike