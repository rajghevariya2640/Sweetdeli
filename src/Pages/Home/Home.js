import React from 'react'
import ExclusiveCake from './ExclusiveCake'
import GetInTouch from './GetInTouch'
import HomeBanner from './HomeBanner'
import HomeGallary from './HomeGallary'
import HomeSlider from './HomeSlider'
import MainService from './MainService'
import OurFeature from './OurFeature'
import Teastimonial from './Teastimonial'
import Video from './Video'

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeSlider />
      <ExclusiveCake />
      <MainService />
      <OurFeature />
      <Video />
      <Teastimonial />
      <GetInTouch />
      <HomeGallary />
    </>
  )
}

export default Home
