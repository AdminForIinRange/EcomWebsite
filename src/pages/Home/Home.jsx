import React from 'react'
import ProductBoard from '../ProductBoard/ProductBoard'
import TitleBanner from '../../components/Banner/TitleBanner'
import { Box } from '@chakra-ui/react'
import BannerTwo from '../../components/Banner/BannerTwo'
import BannerThree from '../../components/Banner/BannerThree.jsx'
import ProductCategoryLineOne from '../../components/ProductCategoryLine/ProductCategoryLineOne.jsx'
import ProductCategoryLineTwo from '../../components/ProductCategoryLine/ProductCategoryLineTwo.jsx'


export default function Home() {
  return (
    <Box px={["1%","1%","2%","3%","3%"]}>
    <TitleBanner />
      <ProductBoard />
      <BannerTwo />
      <ProductCategoryLineTwo />
      <BannerThree />
      <ProductCategoryLineOne />

    </Box>
  )
}
