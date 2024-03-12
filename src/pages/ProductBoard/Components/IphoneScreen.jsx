import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function IphoneScreen() {
  const responsiveHeading = ["2xl", "3xl", "3xl", "4xl", "4xl"];
  const responsiveSubheading = ["md", "xl", "xl", "2xl", "2xl"];

  const responsiveProductHading = ["2xs", "lg", "xl", "xl", "xl"];
  const responsiveProductSubheading = ["xs", "12px", "sm", "sm", "sm"];

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
    },
    { header: "Get The best Tech" },
    { subheading: "Unveiling the Latest trendy tech" },
  ];

  return (
    <VStack>
      <VStack align={"center"} justify={"center"} mb={"20px"}>
        <Text
          fontSize={responsiveHeading}
          fontFamily={"Raleway"}
          fontWeight={"700"}
        >
          Featured Porducts
        </Text>
        <Text fontSize={responsiveSubheading} fontFamily={"Raleway"}>
          Discover the Best with Our Featured Product!
        </Text>
      </VStack>
      <HStack rounded={"md"} bgColor={"gray.200"}
        align={"start"}
        flexWrap={["nowrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        justify={"center"}
        w={"100%"}
        h={"100%"}
        py={"1%"}
      >
        <Box p={"1.5"} w={"150px"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHading} fontWeight={"600"}>
            {Frontproducts[0].product}
          </Text>

          <Box
   
            mt={"15px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[0].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"1.5"} w={"150px"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHading} fontWeight={"600"}>
            {Frontproducts[1].product}
          </Text>

          <Box
            mt={"15px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[1].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"1.5"} w={"150px"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHading} fontWeight={"600"}>
            {Frontproducts[2].product}
          </Text>

          <Box
            mt={"15px"}
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
      bgColor={"gray.200"}
      rounded={"md"}
        align={"start"}
        flexWrap={["nowrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        justify={"center"}
        w={"100%"}
        h={"100%"}
        py={"2%"}
      >
        <Box
          p={"1.5"}
          w={["340px", "340px", "340px", "400px", "400px"]}
          h={"100%"}
          rounded={"xl"}
        >
          <Text fontSize={responsiveProductHading} fontWeight={"600"}>
            {Frontproducts[3].product}
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
          p={"1.5"}
          w={["340px", "340px", "340px", "400px", "400px"]}
          h={"100%"}
          rounded={"xl"}
        >
          <Text fontSize={responsiveProductHading} fontWeight={"600"}>
            {Frontproducts[4].product}
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
  );
}

// going to clean up the code and refactor some elements
