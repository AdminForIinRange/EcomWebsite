import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import {
  responsiveHeading,
  responsiveSubheading,
  responsiveTitleBanner,

} from "../../data/GlobalPresets/Presets";
import banner from "../../data/Banner/banner.json";

export default function TitleBanner() {

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
          h={responsiveTitleBanner}
          rounded={"2xl"}
          bgSize={"cover"}
          bgImage={HeadphoneYellow}
          bgPos={"center"}
          bgRepeat={"no-repeat"}
          p={"2%"}
          justifyContent={"end"}
          alignItems={"end"}
        >
          <VStack
            color={"white"}
            w={"100%"}
            h={"100%"}
            align={"left"}
            justify={"end"}
          >
            <Text
              textAlign={""}
              fontSize={responsiveHeading}
              fontFamily={"Raleway"}
              fontWeight={"700"}
            >
              {FeaturedAdvertBanner[1].header}
            </Text>
            <Text fontSize={responsiveSubheading} fontFamily={"Raleway"}>
              {FeaturedAdvertBanner[1].subheading}
            </Text>
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
}
