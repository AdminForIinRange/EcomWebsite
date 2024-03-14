import React from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function ProductLine({ children }) {


  return (
    <HStack 
    id="style-1"
          align={"start"}
          w={"100%"}
          h={"100%"}
          overflowX={"scroll"}
          gap={["10px", "15px", "15px", "20px", "20px"]}
        >
         {children}
        </HStack>
  );
}