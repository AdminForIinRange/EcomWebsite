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
import HeadphoneYellow from "../../assets/ProductBanner/HeadphoneYellow.png"
export default function ProductBoard() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const isSmallerScreen = useBreakpointValue({ base: true, sm: false });
  const responsiveHeading = ["3xl", "3xl", "3xl", "4xl", "4xl"];
  const responsiveSubheading = ["lg", "xl", "xl", "2xl", "2xl"];

  const responsiveProductHading = ["md", "lg", "xl", "xl", "xl"];
  const responsiveProductSubheading = ["xs", "sm", "sm", "12px", "sm"];

  const responsiveTextAlignment = [
    "center",
    "center",
    "inherit",
    "inherit",
    "inherit",
  ];
  const Frontproducts = [
    {
      product: "Smart thermostat",
      description: "energy-saving temperature control.",
      src: "https://source.unsplash.com/gold-apple-iphone-smartphone-held-at-the-door-IJkSskfEqrM",
    },
    {
      product: "Wireless earbuds",
      description: "Cord-free music and call convenience.",
      src: "https://source.unsplash.com/white-and-black-apple-ceramic-mug-k6zPpoQhVX0",
    },
    {
      product: "Robot vacuum cleaner",
      description: "Automated floor cleaning with precision.",
      src: "https://source.unsplash.com/grayscale-photo-of-round-frame-on-wooden-floor-znfc7DF7M7U",
    },
    {
      product: "Fitness tracker",
      description: "Activity monitoring for health goals.",
      src: " https://source.unsplash.com/person-clicking-apple-watch-smartwatch-rCOWMC8qf8A",
    },
    {
      product: "Smart home security camera",
      description: "Remote monitoring for home safety.",
      src: "https://source.unsplash.com/a-black-and-white-video-game-controller-VVBjk060DdY",
    },
  ];

  const FeaturedAdvertBannerOne = [
    {
      src: "https://source.unsplash.com/woman-wearing-blue-denim-shorts-watching-the-body-of-water-CYrXeFH2KBw",
      header: "Get The best Tech",
      subheading: "Unveiling the Latest trendy tech" 
    },
   
    { src: "https://source.unsplash.com/flatlay-photography-of-wireless-headphones-PDX_a_82obo",
    header: "Featured Porducts",
    subheading: "Discover the Best with Our Featured Product!"  },
  ];

  return (
    <>
      <Box p={"0% 3%"}>
        {isSmallerScreen ? (
          <IphoneScreen />
        ) : (
          <>
            {" "}
           
              <VStack>
                <HStack
                  gap={"20px"}
                  align={"start"}
                  justify={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Box
                    p={"2.5"}
                    bgColor={"#F6F6F6"}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"300px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={HeadphoneYellow}
                      bgPos={"center"}
                      bgRepeat={"no-repeat"}
                      p={"1%"}
                  
                      justifyContent={"end"}
                      alignItems={"end"}
                    >
                      <VStack
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
                          {FeaturedAdvertBannerOne[1].subheading}
                        </Text>
                        <Text
                          fontSize={responsiveSubheading}
                          fontFamily={"Raleway"}
                        >
                         {FeaturedAdvertBannerOne[1].subheading}
                        </Text>
                      </VStack>
                    </Box>
                  </Box>
                </HStack>

                <HStack
                  gap={"20px"}
                  align={"start"}
                  flexWrap={["wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
                  justify={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Box
                    p={"2.5"}
                    bgColor={"#F6F6F6"}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Box
                      align={"left"}
                      position={"absolute"}
                      top={"500px"}
                    ></Box>
                    <Text fontSize={responsiveProductHading} fontWeight={"600"}>
                      {Frontproducts[0].product}
                    </Text>
                    <Text py={1} fontSize={responsiveProductSubheading}>
                      {Frontproducts[0].description}
                    </Text>

                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"300px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[0].src + ")"}
                      bgPos={"center"}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>

                  <Box
                    p={"2.5"}
                    bgColor={"cyan.200"}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text fontSize={responsiveProductHading} fontWeight={"600"}>
                      {Frontproducts[1].product}
                    </Text>
                    <Text py={1} fontSize={responsiveProductSubheading}>
                      {Frontproducts[1].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"300px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[1].src + ")"}
                      bgPos={"center"}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>

                  <Box
                    p={"2.5"}
                    bgColor={"gray.300"}
                    w={"150%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text fontSize={responsiveProductHading} fontWeight={"600"}>
                      {Frontproducts[2].product}
                    </Text>
                    <Text py={1} fontSize={responsiveProductSubheading}>
                      {Frontproducts[2].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"300px"}
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
                    bgColor={"tan"}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text fontSize={responsiveProductHading} fontWeight={"600"}>
                      {Frontproducts[3].product}
                    </Text>
                    <Text py={1} fontSize={responsiveProductSubheading}>
                      {Frontproducts[3].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"150px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[3].src + ")"}
                      bgPos={"center "}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>

                  <Box
                    p={"2.5"}
                    bgColor={"blue.300"}
                    w={"100%"}
                    h={"100%"}
                    rounded={"xl"}
                  >
                    <Text fontSize={responsiveProductHading} fontWeight={"600"}>
                      {Frontproducts[4].product}
                    </Text>
                    <Text py={1} fontSize={responsiveProductSubheading}>
                      {Frontproducts[4].description}
                    </Text>
                    <Box
                      mt={"15px"}
                      w={"100%"}
                      h={"150px"}
                      rounded={"2xl"}
                      bgSize={"cover"}
                      bgImage={"url(" + Frontproducts[4].src + ")"}
                      bgPos={"center "}
                      bgRepeat={"no-repeat"}
                    ></Box>
                  </Box>
                </HStack>
              </VStack>
            {" "}
          </>
        )}
      </Box>
    </>
  );
}

// going to clean up the code and refactor some elements
