import React from 'react'
import ProductBoard from '../ProductBoard/ProductBoard'
import TitleBanner from '../../components/Banner/TitleBanner'
import { Box, VStack } from '@chakra-ui/react'
import BannerTwo from '../../components/Banner/BannerTwo'
import BannerThree from '../../components/Banner/BannerThree.jsx'
import ProductCategoryLineOne from '../../components/ProductCategoryLine/ProductCategoryLineOne.jsx'
import ProductCategoryLineTwo from '../../components/ProductCategoryLine/ProductCategoryLineTwo.jsx'
import TopBanner from '../../components/Banner/TopBanner.jsx'


export default function Home() {
  return (
    <VStack px={["1%","1%","2%","3%","3%"]} gap={"10px"} > 
    <TopBanner /> {/* The elemnets are too close, please review amozon web straturs  */} 
    <TitleBanner />
      <ProductBoard />
      <BannerTwo />
      <ProductCategoryLineTwo />
      <BannerThree />
      <ProductCategoryLineOne />

    </VStack>
  )
}
