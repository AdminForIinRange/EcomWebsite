import React from "react";
import {
  Box,
  Grid,
  Text,
Stack,  GridItem,
  useBreakpointValue,
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
export default function TopProductBoard() {
  const { TopProducts } = FeaturedProducts;

  // You can use breakpoint values to conditionally render components
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const isSmallerScreen = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Grid
      gridGap={"15px"}
    
      w={"100%" }
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
            bgImage={"url(" + TopProducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          />
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
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          >

            <Stack justify={""} align={"center"}  w={
            "100%"
            } h={"100%"}>

            <Text fontSize={responsiveHeading} fontWeight={"600"} color={"pink.300"} > 
                    {TopProducts[0].product}
                  </Text>
                  <Text fontSize={responsiveSubheading} color={"pink.300"}>
                    {TopProducts[0].description}
                  </Text>

            <SeeMoreBtn BtnTheme={"pink.200"}/>
            


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
