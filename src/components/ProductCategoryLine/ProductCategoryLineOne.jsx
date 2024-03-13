import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import {
  responsiveHeading,
  responsiveSubheading,
  responsiveTitleBanner,
  responsiveProductHeading,
  responsiveBanner,
  responsiveBannerHeading2,
  responsiveParagraph,
  responsiveProductSubheading,
} from "../../data/GlobalPresets/Presets";
import ProductCategoryLine from "../../data/ProductCategoryLine/ProductCategoryLine.json";
import banner from "../../data/Banner/banner.json";
import SeeMoreBtn from "../Buttons/SeeMoreBtn";
import GirlOnAhill from "../../assets/ProductBanner/FasionBanner.png";
export default function ProductCategoryLineOne() {
  const { FeaturedAdvertBanner } = banner;

  const { TechnologyCategory, CategoryBox } = ProductCategoryLine;
  return (
    <HStack align={"start"} py={"15px"} w={"100%"} h={"100%"} >
      <VStack
        color={"black"}
        w={["30%", "20%", "20%", "15%", "15%"]}
        h={["200px"]}
        align={"left"}
        justify={"top"}
        bgColor={"wheat"}
        p={"1%"}
        rounded={"md"}
    
      >
        <Text
          fontSize={responsiveBannerHeading2}
          fontFamily={"Raleway"}
          fontWeight={"700"}
        >
          {CategoryBox[0].TechnologyCategoryBox[0].header}
        </Text>
        <Text fontSize={responsiveParagraph} fontFamily={"Raleway"}>
          {CategoryBox[0].TechnologyCategoryBox[0].subheading}
        </Text>
        <HStack
      
          justify={"center"}
          align={"end"}
          h={["50%", "60%", "60%", "60%", "60%"]}
        >
          <SeeMoreBtn />
        </HStack>
      </VStack>

      <HStack align={"start"}  w={"100%"} h={"100%"}  overflowX={"scroll"} gap={"20px"}>

     <VStack justify={"left"} align={"left"}>

    
          <Box
             rounded={"md"}
            w={["100px", "150px", "250px", "250px", "250px"]}
            h={responsiveBanner}
            bgImage={"url(" + TechnologyCategory[0].src + ")"}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            justifyContent={"end"}
            alignItems={"end"}
          >

          </Box>
          <Box w={"150px"}>

          <Text fontWeight={"bold"} fontSize={responsiveProductHeading}>
            {TechnologyCategory[0].product}
          </Text>
          <Text fontSize={responsiveProductSubheading}>
            {TechnologyCategory[0].description}
          </Text>
          <Text fontWeight={"bold"} fontSize={responsiveProductHeading} color={"green.500"} >
            {TechnologyCategory[0].price} <span></span>
            <Text  color={"black"} fontWeight={"light"} as={"span"} textDecoration={"line-through"}>
            {TechnologyCategory[0].oldPrice}
          </Text>
          </Text>
          
  

          </Box>
          </VStack>


     <VStack justify={"left"} align={"left"}>

    
          <Box
             rounded={"md"}
            w={["100px", "150px", "250px", "250px", "250px"]}
            h={responsiveBanner}
            bgImage={"url(" + TechnologyCategory[0].src + ")"}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            justifyContent={"end"}
            alignItems={"end"}
          >

          </Box>
          <Box w={"150px"}>

          <Text fontWeight={"bold"} fontSize={responsiveProductHeading}>
            {TechnologyCategory[0].product}
          </Text>
          <Text fontSize={responsiveProductSubheading}>
            {TechnologyCategory[0].description}
          </Text>
          <Text fontWeight={"bold"} fontSize={responsiveProductHeading} color={"green.500"} >
            {TechnologyCategory[0].price} <span></span>
            <Text  color={"black"} fontWeight={"light"} as={"span"} textDecoration={"line-through"}>
            {TechnologyCategory[0].oldPrice}
          </Text>
          </Text>
          
  

          </Box>
          </VStack>
        
        
        
      
      </HStack>
      
    </HStack>
  );
}
