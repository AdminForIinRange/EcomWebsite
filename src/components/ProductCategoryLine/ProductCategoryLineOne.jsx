import React from "react";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
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

import ProductLine from "./Components/ProductLine";
import ProductCategoryBox from "./Components/ProductCategoryBox";

export default function ProductCategoryLineOne() {

  const { TechnologyCategory, CategoryBox } = ProductCategoryLine;
  return (
    <>
      <HStack align={"start"} py={"15px"} w={"100%"} h={"100%"}>
        <ProductCategoryBox Theme={"#E2E8F0"}  >
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
        </ProductCategoryBox>

        <ProductLine>
          {TechnologyCategory.map((item, index) => (
            <VStack  key={index} justify={"left"} align={"left"} mb={["10px", "10px", "20px", "20px", "20px"]}>
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
                <Text
                  fontWeight={"bold"}
                  fontSize={responsiveProductHeading}
                  color={"green.500"}
                >
                  {item.price} <span></span>
                  <Text
                    color={"black"}
                    fontWeight={"light"}
                    as={"span"}
                    textDecoration={"line-through"}
                  >
                    {item.oldPrice}
                  </Text>
                </Text>
              </Box>
            </VStack>
          ))}
        </ProductLine>
      </HStack>
    </>
  );
}
