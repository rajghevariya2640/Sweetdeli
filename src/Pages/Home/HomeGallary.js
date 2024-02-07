import { makeStyles } from '@mui/styles'
import React from 'react'
import "swiper/css"
import { SwiperSlide } from 'swiper/react'
import CustomBox from '../../Components/CustomBox'
import CustomRow from '../../Components/CustomRow'
import CustomSwiper from '../../Components/CustomSwiper'
import img1 from '../../image/Cupcake1.jpg'
import img2 from '../../image/Cupcake2.jpg'
import img3 from '../../image/Cupcake3.jpg'
import img4 from '../../image/VideoPoster.jpg'

const useStyles = makeStyles((theme) => ({
    gallerySlideImage:{
        height: 262,
        width: '100%',
        objectFit: 'cover',
        verticalAlign: 'text-top',
        [theme.breakpoints.down('lg')]:{
            height: 225,
        },
        [theme.breakpoints.down('md')]:{
            height: 175,
        },
        [theme.breakpoints.down('sm')]:{
            height: 125,
        },
    },
}))

const HomeGallary = () => {

    const classes = useStyles(); 

    const homeGallary = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
    ]
  return (
    <CustomBox>
        <CustomRow>
            <CustomSwiper  
                slidesPerView={4}
                className={`mySwiper ${classes.cakeSlider}`}
                breakpoints={{
                    1440:{
                        slidesPerView: 4
                    },
                    1200:{
                        slidesPerView: 3
                    },
                    991:{
                        slidesPerView: 2.75
                    },
                    576:{
                        slidesPerView: 2.5
                    },
                    0:{
                        slidesPerView: 2.1676
                    },
                }}
            >
                {
                    homeGallary.map((data, index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <img src={data.image} alt='' className={classes.gallerySlideImage}  />
                            </SwiperSlide>
                        )
                    })
                }
            </CustomSwiper>
        </CustomRow>
    </CustomBox>
  )
}

export default HomeGallary
