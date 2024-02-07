import React from 'react'
import { Swiper } from 'swiper/react'

const CustomSwiper = ({children, className, ...props}) => {
  return (
    <Swiper className={`${className ? className : ''}`} {...props}>
        {children}
    </Swiper>
  )
}

export default CustomSwiper
