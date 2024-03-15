import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import {
  responsiveHeading,
  responsiveSubheading,
  responsiveTitleBanner,
  responsiveTopBanner

} from "../../data/GlobalPresets/Presets";
import banner from "../../data/Banner/banner.json";

import ScatterWorkBanner from "../../assets/ProductBanner/ScatterWorkBanner.png";
export default function TopBanner() {

  const { TopBannerIntro } = banner
  return (
    <HStack
      align={"start"}
      justify={"center"}
      w={"100%"}
      h={"100%"}
      py={"5px"}
    >
      <Box w={"100%"} h={"100%"} >
        <Box
          w={"100%"}
          h={responsiveTopBanner}
          rounded={"2xl"}
          bgSize={"cover"}
          bgImage={ScatterWorkBanner}
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
              {TopBannerIntro[0].header}
            </Text>
            <Text fontSize={responsiveSubheading} fontFamily={"Raleway"}>
              {TopBannerIntro[0].subheading}
            </Text>
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
}
