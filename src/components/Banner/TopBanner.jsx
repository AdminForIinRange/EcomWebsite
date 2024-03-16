import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import {
  responsiveHeading,
  responsiveSubheading,
  responsiveTitleBanner,
  responsiveTopBanner,
} from "../../data/GlobalPresets/Presets";
import banner from "../../data/Banner/banner.json";
import { FaShoppingCart } from "react-icons/fa";
import ScatterWorkBanner from "../../assets/ProductBanner/ScatterWorkBanner.png";
export default function TopBanner() {
  const { TopBannerIntro } = banner;
  return (
    <HStack
    
      h={responsiveTopBanner}
      rounded={"2xl"}
      bgSize={"cover"}
      // bgImage={`https://source.unsplash.com/random/1920x1080?silk+white`}
      bgColor={"green.200"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      p={"2%"}
      justifyContent={""}
      alignItems={"end"}
      align={"start"}
      justify={"center"}
      w={"100%"}

    >
      <VStack
        color={"white"}
        w={"100%"}
        h={"100%"}
        align={"left"}
        justify={"center"}
        p={"3"}
      >
        <Text
          textAlign={""}
          fontSize={["30px", "30px", "40px", "50px", "60px"]}
          fontFamily={"Raleway"}
          fontWeight={"700"}
        >
          {TopBannerIntro[0].header}
        </Text>
        <Text fontSize={responsiveSubheading} fontFamily={"Raleway"}>
          {TopBannerIntro[0].subheading}
        </Text>

        <Button leftIcon={<FaShoppingCart />} h={"50px"} w={"150px"}>
          Add to Cart!
        </Button>
      </VStack>

      <HStack bg={'green.300'} w={"100%"} h={"100%"} >

      </HStack>
    </HStack>
  );
}
