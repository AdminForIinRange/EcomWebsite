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
} from "../../data/GlobalPresets/Presets";
import banner from "../../data/Banner/banner.json";
import SeeMoreBtn from "../Buttons/SeeMoreBtn";
import PeopleWokingBanner from "../../assets/ProductBanner/PeopleWokingBanner.png";
export default function BannerThree() {
  const { FeaturedAdvertBanner, TechnologyBanner } = banner;
  return (
    <HStack
      align={"start"}
      justify={"center"}
      w={"100%"}
      h={"100%"}
      py={"15px"}
    >
      <Box w={"100%"} h={"100%"}>
        <Box
          w={"100%"}
          h={responsiveBanner}
          bgSize={"cover"}
          bgImage={PeopleWokingBanner}
          bgPos={[
            "bottom right",
            " bottom right",
            "center",
            "center",
            "center",
          ]}
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
            bgColor={"gray.200"}
            p={"1%"}
          >
            <Text
              fontSize={responsiveBannerHeading2}
              fontFamily={"Raleway"}
              fontWeight={"700"}
            >
              {TechnologyBanner[0].header}
            </Text>
            <Text fontSize={responsiveParagraph} fontFamily={"Raleway"}>
              {TechnologyBanner[0].subheading}
            </Text>
            <HStack
              justify={"top"}
              align={"end"}
              h={["20%", "40%", "100%", "100%", "100%"]}
            >
              <SeeMoreBtn BtnTheme={"gray"} />
            </HStack>
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
}