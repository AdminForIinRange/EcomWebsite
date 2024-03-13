import React from "react";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
export default function SeeMoreBtn() {
  return (
    <Button
      bgColor={"#11343C"}
      w={["60px", "70px", "100px", "100px", "110px"]}
      h={["20px", "25px", "35px", "35px", "35px"]}
      rounded={"2xl"}
    >
      <Text
        color={"#D9C8BA"}
        fontSize={["10px", "10px", "15px", "15px", "16px"]}
      >
        See More
      </Text>
    </Button>
  );
}
