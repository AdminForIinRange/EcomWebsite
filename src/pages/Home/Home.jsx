import React from 'react'
import ProductBoard from '../ProductBoard/ProductBoard'
import TitleBanner from '../../components/Banner/TitleBanner'
import { Box } from '@chakra-ui/react'
import BannerTwo from '../../components/Banner/BannerTwo'
import ProductCategoryLineOne from '../../components/ProductCategoryLine/ProductCategoryLineOne.jsx'


export default function Home() {
  return (
    <Box px={["1%","1%","2%","3%","3%"]}>
    <TitleBanner />
      <ProductBoard />
      <BannerTwo />
      <ProductCategoryLineOne />
    </Box>
  )
}
