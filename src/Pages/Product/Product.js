import React from 'react'
import HomeSlider from '../Home/HomeSlider'
import AllProduct from './AllProduct'
import BestSelldSlider from './BestSellSlider'
import FilterSection from './FilterSection'
import ReccomendedSlider from './ReccomendedSlider'

const Product = () => {

  return (
    <>
      <FilterSection />
      <HomeSlider />
      <ReccomendedSlider />
      <BestSelldSlider />
      <AllProduct />
    </>
  )
}

export default Product
