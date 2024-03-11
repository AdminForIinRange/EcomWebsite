import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function ProductBoard() {
  const responsiveSubheading = ["sm", "md", "md", "lg", "lg"];

  const responsiveHeading = ["lg", "2xl", "2xl", "4xl", "4xl"];
  const responsiveTextAlignment = [
    "center",
    "inherit",
    "inherit",
    "inherit",
    "inherit",
  ];

  return (
    <Box p={"0% 4%"}>
      <VStack align={"left"} justify={"left"}>
        <Text
          textAlign={responsiveTextAlignment}
          fontSize={responsiveHeading}
          fontFamily={"Raleway"}
          fontWeight={"700"}
        >
          Featured Porducts
        </Text>
        <Text
          textAlign={responsiveTextAlignment}
          fontSize={responsiveSubheading}
          fontFamily={"Raleway"}
        >
          Discover the Best with Our Featured Product!
        </Text>
      </VStack>

      <VStack></VStack>
    </Box>
  );
}
