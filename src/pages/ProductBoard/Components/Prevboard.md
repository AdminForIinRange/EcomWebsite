```js
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function ProductBoard() {
  const responsiveHeading = ["3xl", "3xl", "3xl", "4xl", "4xl"];
  const responsiveSubheading = ["lg", "xl", "xl", "2xl", "2xl"];

  const responsiveProductHading = ["md", "lg", "xl", "xl", "xl"];
  const responsiveProductSubheading = ["xs", "sm", "sm", "sm", "sm"];

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
      description: "Remote-controlled energy-saving temperature control.",
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
    <Box p={"0% 1%"}>
      <VStack mt={"125px"}>
        <HStack
          gap={"20px"}
          align={"start"}
          flexWrap={"wrap"}
          justify={"center"}
          w={"100%"}
          h={"100%"}
        >
          <Box
            p={"2.5"}
            bgColor={"#F6F6F6"}
            w={["150px", "200px", "250px", "400px", "400px"]}
            h={"100%"}
            rounded={"xl"}
          >
            <Text fontSize={responsiveProductHading} fontWeight={"600"}>
              {Frontproducts[0].product}
            </Text>
            <Text py={1} fontSize={responsiveProductSubheading}>
              {Frontproducts[0].description}
            </Text>

            <Box
              mt={"15px"}
              w={"100%"}
              h={["100px", "100px", "200px", "300px", "300px"]}
              rounded={"2xl"}
              bgSize={"cover"}
              bgImage={"url(" + Frontproducts[0].src + ")"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
            ></Box>
          </Box>

          <Box
            p={"2.5"}
            bgColor={"#F6F6F6"}
            w={["150px", "200px", "250px", "400px", "400px"]}
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
              h={["100px", "100px", "200px", "300px", "300px"]}
              rounded={"2xl"}
              bgSize={"cover"}
              bgImage={"url(" + Frontproducts[1].src + ")"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
            ></Box>
          </Box>

          <Box
            p={"2.5"}
            bgColor={"#F6F6F6"}
            w={["315px", "415px", "815px", "815px", "815px"]}
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

          <Box
            p={"2.5"}
            bgColor={"#F6F6F6"}
            w={"815px"}
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
            bgColor={"#F6F6F6"}
            w={"815px"}
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
    </Box>
  );
}

// going to clean up the code and refactor some elements
```
