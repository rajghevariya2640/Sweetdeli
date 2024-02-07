import React from 'react'
import FilterSection from '../Product/FilterSection'
import ProductDetailTab from './ProductDetailTab'
import SingleProduct from './SingleProduct'
import AlsoLike from './AlsoLike'

const ProductInfo = () => {
  return (
    <>
      <FilterSection />
      <SingleProduct />
      <ProductDetailTab />
      <AlsoLike />
    </>
  )
}

export default ProductInfo
