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
  responsiveParagraph

} from "../../data/GlobalPresets/Presets";
import banner from "../../data/Banner/banner.json";
import SeeMoreBtn from "../Buttons/SeeMoreBtn";
import GirlOnAhill from "../../assets/ProductBanner/FasionBanner.png"
export default function BannerTwo() {

  const { FeaturedAdvertBanner } = banner
  return (
    <HStack
      align={"start"}
      justify={"center"}
      w={"100%"}
      h={"100%"}
      py={"15px"}
    >
      <Box w={"100%"} h={"100%"} >
        <Box
   
          w={"100%"}
          h={responsiveBanner}
         
          bgSize={"cover"}
          bgImage={GirlOnAhill}
          bgPos={"center"}
          bgRepeat={"no-repeat"}
          
          justifyContent={"end"}
          alignItems={"end"}
          
        >
          <VStack
            color={"black"}
            w={["40%", "40%", "30%", "30%", "15%"]}
            h={"100%"}
            align={"left"}
            justify={"top"}
            bgColor={"wheat"}
            p={"1%"}
            
          
          >
            <Text

              fontSize={responsiveBannerHeading2}
              fontFamily={"Raleway"}
              fontWeight={"700"}
            >
              {FeaturedAdvertBanner[0].header}
            </Text>
            <Text fontSize={responsiveParagraph} fontFamily={"Raleway"}>
              {FeaturedAdvertBanner[0].subheading}
            </Text>
            <HStack   justify={"top"} align={"end"} h={["20%", "40%", "100%", "100%", "100%"]}>
            <SeeMoreBtn />
            </HStack>
          
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
}
