import React from "react";
import HeadphoneYellow from "../../../assets/ProductBanner/HeadphoneYellow.png";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export default function TitleBanner({
  FeaturedAdvertBannerOne,
  Frontproducts,
  responsiveTitleBanner,
  responsiveHeading,
  responsiveSubheading,
  responsiveProductHeading,
  responsiveProductSubheading,
  responsiveTextAlignment,
}) {
  return (
    <HStack
      
      align={"start"}
      justify={"center"}
      w={"100%"}
      h={"100%"}
      mb={"15px"}
    >
      <Box w={"100%"} h={"100%"} rounded={"xl"}>
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
              {FeaturedAdvertBannerOne[1].header}
            </Text>
            <Text fontSize={responsiveSubheading} fontFamily={"Raleway"}>
              {FeaturedAdvertBannerOne[1].subheading}
            </Text>
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
}
