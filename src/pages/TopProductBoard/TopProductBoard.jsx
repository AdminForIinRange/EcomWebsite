import React from "react";
import {
  Box,
  Grid,
  Text,
  Stack,
  GridItem,
  useBreakpointValue,
  VStack,
  HStack,
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
import ProductCategoryLine from "../../data/ProductCategoryLine/ProductCategoryLine.json";
import ProductLine from "../../components/ProductCategoryLine/Components/ProductLine";
export default function TopProductBoard() {
  const { WomenFashionBanner } = banner;
  const { Exclusive } = FeaturedProducts;

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
            bgImage={`https://source.unsplash.com/random/600x400?product+skincare+fasion`}
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
          <HStack w={"100%"} h={"100%"}>
            <Box
              w={"100%"}
              h={"100%"}
              rounded={"2xl"}
              bgSize={"cover"}
              bgImage={"url(" + Exclusive[0].src + ")"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
            ></Box>
            <Box
              w={"100%"}
              h={"100%"}
              rounded={"2xl"}
              bgSize={"cover"}
              bgImage={"url(" + Exclusive[0].src + ")"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
            ></Box>
          </HStack>
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
            bgImage={"url(" + Exclusive[0].src + ")"}
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
            bgRepeat={"no-repeat"}
          >
            <Box
              w={"100%"}
              h={"90px"}
              bgSize={"cover"}
              bgColor={"red.200"}
              bgPos={"center "}
              bgRepeat={"no-repeat"}
            ></Box>

            <VStack w={"100%"} h={"100%"} align={"center"} px={"2%"}>
              <HStack w={"100%"} h={"100%"} justify={"center"}>
                <Box w={"100%"} h={"100%"} rounded={"xl"}>
                  <Box
                    mt={"15px"}
                    w={"100%"}
                    h={"270px"}
                    rounded={"2xl"}
                    bgSize={"cover"}
                    bgImage={"url(" + Exclusive[3].src + ")"}
                    bgPos={"center "}
                    bgRepeat={"no-repeat"}
                  ></Box>
                  <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                    {Exclusive[3].product}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].description}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>
                </Box>{" "}
                <Box w={"100%"} h={"100%"} rounded={"xl"}>
                  <Box
                    mt={"15px"}
                    w={"100%"}
                    h={"270px"}
                    rounded={"2xl"}
                    bgSize={"cover"}
                    bgImage={"url(" + Exclusive[3].src + ")"}
                    bgPos={"center "}
                    bgRepeat={"no-repeat"}
                  ></Box>
                  <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                    {Exclusive[3].product}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].description}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>
                </Box>
              </HStack>

              <HStack w={"100%"} h={"100%"}>
                <Box w={"100%"} h={"100%"} rounded={"xl"}>
                  <Box
                    w={"100%"}
                    h={"200px"}
                    rounded={"2xl"}
                    bgSize={"cover"}
                    bgImage={"url(" + Exclusive[3].src + ")"}
                    bgPos={"center "}
                    bgRepeat={"no-repeat"}
                  ></Box>
                  <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                    {Exclusive[3].product}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].description}
                  </Text>
                   <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>
                </Box>{" "}
                <Box w={"100%"} h={"100%"} rounded={"xl"}>
                  <Box
                    w={"100%"}
                    h={"200px"}
                    rounded={"2xl"}
                    bgSize={"cover"}
                    bgImage={"url(" + Exclusive[3].src + ")"}
                    bgPos={"center "}
                    bgRepeat={"no-repeat"}
                  ></Box>
                  <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                    {Exclusive[3].product}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].description}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>
                </Box>
                <Box w={"100%"} h={"100%"} rounded={"xl"}>
                  <Box
                    w={"100%"}
                    h={"200px"}
                    rounded={"2xl"}
                    bgSize={"cover"}
                    bgImage={"url(" + Exclusive[3].src + ")"}
                    bgPos={"center "}
                    bgRepeat={"no-repeat"}
                  ></Box>
                  <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                    {Exclusive[3].product}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].description}
                  </Text>
                  <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </GridItem>
        <GridItem
          w={"100%"}
          h={"100%"}
          gridColumn={["1/6", "1/6", "1/6", "5/6", "5/5"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "1/5"]}
          style={{ fontStyle: "italic" }}
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
                  fontFamily={"serif"}
                  fontSize={responsiveHeading}
                  fontWeight={"600"}
                  color={"pink.300"}
                >
                  {WomenFashionBanner[1].header}
                </Text>
                <Text
                  fontFamily={"serif"}
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
   
          gridColumn={["1/6", "1/6", "1/6", "5/6", "1/5"]}
          gridRow={["1/6", "1/6", "1/6", "1/6", "4/4"]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgColor={"yellow.100"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            p={"0.5%"}
          >
            <Text color={"orange"}  fontSize={responsiveProductHeading} fontWeight={"700"} >
              Exclusive 02:58:46
            </Text>
            

            <HStack w={"100%"} h={"100%"}>
             { <VStack
                w={"100%"}
                h={"100%"}
                rounded={"2xl"}
                bgSize={"cover"}
              
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                align={"left"}
         
              >
                <Box
                  w={"100%"}
                  h={"100px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + Exclusive[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Box >
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {Exclusive[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {Exclusive[3].description}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>

                </Box>
         
              </VStack>}
{/* 
              <VStack
                w={"100%"}
                h={"100%"}
                rounded={"2xl"}
                bgSize={"cover"}
              
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                align={"left"}
         
              >
                <Box
                  w={"100%"}
                  h={"100px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + Exclusive[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Box >
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {Exclusive[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {Exclusive[3].description}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>

                </Box>
         
              </VStack>     <VStack
                w={"100%"}
                h={"100%"}
                rounded={"2xl"}
                bgSize={"cover"}
              
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                align={"left"}
         
              >
                <Box
                  w={"100%"}
                  h={"100px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + Exclusive[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Box >
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {Exclusive[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {Exclusive[3].description}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>

                </Box>
         
              </VStack>     <VStack
                w={"100%"}
                h={"100%"}
                rounded={"2xl"}
                bgSize={"cover"}
              
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                align={"left"}
         
              >
                <Box
                  w={"100%"}
                  h={"100px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + Exclusive[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Box >
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {Exclusive[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {Exclusive[3].description}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>

                </Box>
         
              </VStack>     <VStack
                w={"100%"}
                h={"100%"}
                rounded={"2xl"}
                bgSize={"cover"}
              
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                align={"left"}
         
              >
                <Box
                  w={"100%"}
                  h={"100px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + Exclusive[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Box >
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {Exclusive[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {Exclusive[3].description}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>

                </Box>
         
              </VStack>     <VStack
                w={"100%"}
                h={"100%"}
                rounded={"2xl"}
                bgSize={"cover"}
              
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                align={"left"}
         
              >
                <Box
                  w={"100%"}
                  h={"100px"}
                  rounded={"2xl"}
                  bgSize={"cover"}
                  bgImage={"url(" + Exclusive[3].src + ")"}
                  bgPos={"center "}
                  bgRepeat={"no-repeat"}
                ></Box>
                <Box >
                <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
                  {Exclusive[3].product}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                  {Exclusive[3].description}
                </Text>
                <Text fontSize={responsiveProductSubheading}>
                    {Exclusive[3].price}
                  </Text>

                </Box>
         
              </VStack>      */}
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
