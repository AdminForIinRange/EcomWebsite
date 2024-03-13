import {
  Box,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import SmallScreenProductBoard from "./Components/SmallScreenProductBoard";
import IphoneScreen from "./Components/IphoneScreen";
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png";
import {

  responsiveHeading,
  responsiveSubheading,
  responsiveProductHeading,
  responsiveProductSubheading,
  responsiveTextAlignment,
  responsiveTitleBanner,

} from "../../data/ProductBoard/Presets";

import Products from "../../data/Products/products.json";
import TitleBanner from "./Components/TitleBanner";
export default function ProductBoard() {
  const { FeaturedAdvertBannerOne, Frontproducts } = Products;

  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const isSmallerScreen = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Box px={["1%","1%","2%","3%","3%"]}>
        <TitleBanner
          FeaturedAdvertBannerOne={FeaturedAdvertBannerOne}
          Frontproducts={Frontproducts}
          responsiveTitleBanner={responsiveTitleBanner}
          responsiveHeading={responsiveHeading}
          responsiveSubheading={responsiveSubheading}
          responsiveProductHeading={responsiveProductHeading}
          responsiveProductSubheading={responsiveProductSubheading}
          responsiveTextAlignment={responsiveTextAlignment}

        />
        {isSmallerScreen ? (
          <IphoneScreen
          FeaturedAdvertBannerOne={FeaturedAdvertBannerOne}
          Frontproducts={Frontproducts}
          responsiveTitleBanner={responsiveTitleBanner}
          responsiveHeading={responsiveHeading}
          responsiveSubheading={responsiveSubheading}
          responsiveProductHeading={responsiveProductHeading}
          responsiveProductSubheading={responsiveProductSubheading}
          responsiveTextAlignment={responsiveTextAlignment}

           />
        ) : (
          <>
            {" "}
            {isSmallScreen ? (
              <>
                {" "}
                <SmallScreenProductBoard
                  FeaturedAdvertBannerOne={FeaturedAdvertBannerOne}
                  Frontproducts={Frontproducts}
                  responsiveTitleBanner={responsiveTitleBanner}
                  responsiveHeading={responsiveHeading}
                  responsiveSubheading={responsiveSubheading}
                  responsiveProductHeading={responsiveProductHeading}
                  responsiveProductSubheading={responsiveProductSubheading}
                  responsiveTextAlignment={responsiveTextAlignment}
     
                   />
                {
                  // clean up the code and change the bg box color,
                  // make all data golobal, not in redux, beucse its not a state change
                  //ratehr just push in in a data.jsx fille and spread that into Firebase doc or something
                }
              </>
            ) : (
              <VStack>
                <HStack
                  gap={"20px"}
                  align={"start"}
                  flexWrap={["nowrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
                  justify={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Box
                    p={"2.5"}
                    bgColor={Frontproducts[0].theme}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Box
                      align={"left"}
                      position={"absolute"}
                      top={"500px"}
                    ></Box>
                    <Text
                      fontSize={responsiveProductHeading}
                      fontWeight={"600"}
                    >
                      {Frontproducts[0].product}
                    </Text>
                    <Text fontSize={responsiveProductSubheading}>
                      {Frontproducts[0].description}
                    </Text>

                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"150px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[0].src + ")"}
                      bgPos={"center"}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>

                  <Box
                    p={"2.5"}
                    bgColor={Frontproducts[1].theme}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text
                      fontSize={responsiveProductHeading}
                      fontWeight={"600"}
                    >
                      {Frontproducts[1].product}
                    </Text>
                    <Text fontSize={responsiveProductSubheading}>
                      {Frontproducts[1].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"150px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[1].src + ")"}
                      bgPos={"center"}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>

                  <Box
                    p={"2.5"}
                    bgColor={Frontproducts[2].theme}
                    w={"150%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text
                      fontSize={responsiveProductHeading}
                      fontWeight={"600"}
                    >
                      {Frontproducts[2].product}
                    </Text>
                    <Text fontSize={responsiveProductSubheading}>
                      {Frontproducts[2].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"150px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[2].src + ")"}
                      bgPos={"center"}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>
                </HStack>

                <HStack
                  gap={"20px"}
                  align={"start"}
                  flexWrap={"nowrap"}
                  justify={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Box
                    p={"2.5"}
                    bgColor={Frontproducts[3].theme}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text
                      fontSize={responsiveProductHeading}
                      fontWeight={"600"}
                    >
                      {Frontproducts[3].product}
                    </Text>
                    <Text fontSize={responsiveProductSubheading}>
                      {Frontproducts[3].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"100px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[3].src + ")"}
                      bgPos={"center "}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>

                  <Box
                    p={"2.5"}
                    bgColor={Frontproducts[4].theme}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text
                      fontSize={responsiveProductHeading}
                      fontWeight={"600"}
                    >
                      {Frontproducts[4].product}
                    </Text>
                    <Text fontSize={responsiveProductSubheading}>
                      {Frontproducts[4].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"100px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[4].src + ")"}
                      bgPos={"center "}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>
                </HStack>
              </VStack>
            )}{" "}
          </>
        )}
      </Box>
    </>
  );
}

// going to clean up the code and refactor some elements
