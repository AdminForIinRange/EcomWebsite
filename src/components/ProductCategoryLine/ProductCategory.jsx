import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";
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

export default function ProductCategory({ childrenOne, childrenTwo }) {
  const { FeaturedAdvertBanner } = banner;
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  const { TechnologyCategory, CategoryBox } = ProductCategoryLine;
  return (
    <>
      <HStack align={"start"} py={"15px"} w={"100%"} h={"100%"}>
        {isSmallScreen ? (
          <>
          </>
        ) : (
          <VStack
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
            {childrenOne}
            <HStack
              justify={"center"}
              align={"end"}
              h={["50%", "60%", "60%", "60%", "60%"]}
            >
              <SeeMoreBtn />
            </HStack>
          </VStack>
        )}

        <HStack
          align={"start"}
          w={"100%"}
          h={"100%"}
          overflowX={"scroll"}
          gap={["10px", "15px", "15px", "20px", "20px"]}
        >
          {childrenTwo}
        </HStack>
      </HStack>
    </>
  );
}
