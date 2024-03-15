import React from "react";
import {
  Box,
  Grid,
  Text,
  Stack,
  GridItem,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import FeaturedProducts from "../../data/FeaturedProducts/FeaturedProducts.json";
import DiorBagGirl from "../../assets/img/DiorBagGirl.png";
import {
  responsiveHeading,
  responsiveSubheading,
  responsiveProductHeading,
  responsiveProductSubheading,
  responsiveTextAlignment,
  responsiveTitleBanner,
} from "../../data/GlobalPresets/Presets";
import SeeMoreBtn from "../../components/Buttons/SeeMoreBtn";
import banner from "../../data/Banner/banner.json";

export default function TopProductBoard() {
  const { WomenFashionBanner } = banner;
  const { TopProducts } = FeaturedProducts;

  // You can use breakpoint values to conditionally render components
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const isSmallerScreen = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Grid
        gridGap={"15px"}
        w={"100%"}
        h={"100%"}
        minH={"100vh"} // Adjusted minH to fill the viewport height
        templateColumns={"repeat(5, 1fr)"} // Removed extra space after '1fr'
        templateRows={"repeat(4, 1fr)"} // Removed extra space after '1fr'
      >
        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "1/6", "1/3"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "1/2"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + TopProducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          />
        </GridItem>

        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "1/6", "1/3"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "2/3"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + TopProducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          />
        </GridItem>
        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "1/6", "1/3"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "3/4"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + TopProducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          />
        </GridItem>

        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "5/6", "3/5"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "1/4"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgPos={"center"}
            p={"2%"}
            bgColor={"purple.200"}
            bgRepeat={"no-repeat"}
          >
            <Text fontWeight={"500"} fontSize={responsiveSubheading}>
              Top Rated
            </Text>

            <VStack w={"100%"}  align={"center"}>
            <Box w={"100%"} h={"100%"} rounded={"xl"}>
                <Box
                  mt={"15px"}
                  w={"100%"}
                  h={"250px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + TopProducts[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {TopProducts[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {TopProducts[3].description}
                </Text>
              </Box>
              <Box w={"100%"} h={"100%"} rounded={"xl"}>
                <Box
                  mt={"15px"}
                  w={"100%"}
                  h={"250px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + TopProducts[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {TopProducts[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {TopProducts[3].description}
                </Text>
              </Box>

              
            </VStack>
          </Box>
        </GridItem>
        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "5/6", "5/5"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "1/5"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={""}
            bgSize={"cover"}
            bgImage={DiorBagGirl}
            bgPos={"top center"}
            bgRepeat={"no-repeat"}
          >
            <Stack
              justify={"end"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              p={"10px"}
            >
              <Box
                w={"100%"}
                h={["80px", "90px", "90px", "100px", "170px"]}
                align={"center"}
                bgColor={"pink.100"}
              >
                <Text
                  fontSize={responsiveHeading}
                  fontWeight={"600"}
                  color={"pink.300"}
                >
                  {WomenFashionBanner[1].header}
                </Text>
                <Text
                  fontSize={responsiveSubheading}
                  color={"pink.300"}
                  mb={"10px"}
                >
                  {WomenFashionBanner[1].subheading}
                </Text>

                <SeeMoreBtn BtnTheme={"pink.200"} />
              </Box>
            </Stack>
          </Box>
        </GridItem>

        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "5/6", "1/5"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "4/4"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + TopProducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          />
        </GridItem>
      </Grid>
    </>
  );
}
