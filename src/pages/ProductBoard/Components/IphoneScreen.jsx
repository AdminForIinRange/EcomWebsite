import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import HeadphoneYellow from "../../../assets/ProductBanner/HeadphoneYellow.png";
export default function IphoneScreen({ FeaturedAdvertBannerOne,
  Frontproducts,
  responsiveTitleBanner,
  responsiveHeading,
  responsiveSubheading,
  responsiveProductHeading,
  responsiveProductSubheading,
  responsiveTextAlignment,}) {
  
  return (
    <>
     

      <HStack
        rounded={"md"}
        bgColor={Frontproducts[0].theme}
        align={"start"}
        flexWrap={["nowrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        justify={"center"}
        w={"100%"}
        h={"100%"}
        py={"1%"}
        mt={"10px"}
      >
        <Box p={"1.5"} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[0].product}
          </Text>

          <Box
            mt={"5px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"1.5"} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[1].product}
          </Text>

          <Box
            mt={"5px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[1].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"1.5"} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[2].product}
          </Text>

          <Box
            mt={"5px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[2].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
      </HStack>

      <HStack
        mt={"10px"}
        bgColor={Frontproducts[0].theme}
        rounded={"md"}
        align={"start"}
        flexWrap={["nowrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        justify={"center"}
        w={"100%"}
        h={"100%"}
        py={"2%"}
      >
        <Box p={"1.5"} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[3].product}
          </Text>

          <Box
            mt={"5px"}
            w={"100%"}
            h={"70px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[3].src + ")"}
            bgPos={"center "}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"1.5"} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[4].product}
          </Text>

          <Box
            mt={"5px"}
            w={"100%"}
            h={"70px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[4].src + ")"}
            bgPos={"center "}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
      </HStack>
    </>
  );
}

// going to clean up the code and refactor some elements
