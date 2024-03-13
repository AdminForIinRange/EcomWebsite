import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import { Box, Button, HStack, Text, VStack, useBreakpointValue} from "@chakra-ui/react";
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
import ProductCategory from "./ProductCategory";
export default function ProductCategoryLineOne() {
  const { FeaturedAdvertBanner } = banner;
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  const { TechnologyCategory, CategoryBox } = ProductCategoryLine;
  return (
    <>

{/* <ProductCategory>
<Text
    fontSize={responsiveBannerHeading2}
    fontFamily={"Raleway"}
    fontWeight={"700"}
  >
    {CategoryBox[0].TechnologyCategoryBox[0].header}
  </Text>
  <Text
    fontSize={responsiveParagraph}
    fontFamily={"Raleway"}
  >
    {CategoryBox[0].TechnologyCategoryBox[0].subheading}
  </Text> */}

  {/* Second set of children */}
  {/* {TechnologyCategory.map((item, index) => (
    <VStack key={index} justify={"left"} align={"left"}>
      <Box
        rounded={"md"}
        w={["100px", "150px", "250px", "250px", "250px"]}
        h={responsiveBanner}
        bgImage={"url(" + item.src + ")"}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        justifyContent={"end"}
        alignItems={"end"}
      ></Box>
      <Box w={["100px", "150px", "250px", "250px", "250px"]}>
        <Text fontWeight={"bold"} fontSize={responsiveProductHeading}>
          {item.product}
        </Text>
        <Text fontSize={responsiveProductSubheading}>
          {item.description}
        </Text>
        <Text fontWeight={"bold"} fontSize={responsiveProductHeading} color={"green.500"}>
          {item.price} <span></span>
          <Text color={"black"} fontWeight={"light"} as={"span"} textDecoration={"line-through"}>
            {item.oldPrice}
          </Text>
        </Text>
      </Box>
    </VStack>
  ))} */}

{/* </ProductCategory> */}



    <HStack align={"start"} py={"15px"} w={"100%"} h={"100%"} >
     { isSmallScreen ? <>
     </> : <VStack
        color={"black"}
        w={["30%", "20%", "20%", "15%", "15%"]}
        h={"300px"}
        align={"left"}
        justify={"top"}
        bgColor={"wheat"}
        p={"1%"}
        rounded={"md"}
        textAlign={"center"}
    
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
      </VStack>}

      <HStack align={"start"}  w={"100%"} h={"100%"}  overflowX={"scroll"} gap={["10px", "15px", "15px", "20px", "20px"]}>

      {TechnologyCategory.map((item, index) => (
    <VStack key={index} justify={"left"} align={"left"}>
      <Box
        rounded={"md"}
        w={["100px", "150px", "250px", "250px", "250px"]}
        h={responsiveBanner}
        bgImage={"url(" + item.src + ")"}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        justifyContent={"end"}
        alignItems={"end"}
      ></Box>
      <Box w={["100px", "150px", "250px", "250px", "250px"]}>
        <Text fontWeight={"bold"} fontSize={responsiveProductHeading}>
          {item.product}
        </Text>
        <Text fontSize={responsiveProductSubheading}>
          {item.description}
        </Text>
        <Text fontWeight={"bold"} fontSize={responsiveProductHeading} color={"green.500"}>
          {item.price} <span></span>
          <Text color={"black"} fontWeight={"light"} as={"span"} textDecoration={"line-through"}>
            {item.oldPrice}
          </Text>
        </Text>
      </Box>
    </VStack>
  ))}

        
        
        
      
      </HStack>
      
    </HStack>








{/* 
<ProductCategory  Category={TechnologyCategory} CategoryBox={CategoryBox} /> */}
</>
  );
}
