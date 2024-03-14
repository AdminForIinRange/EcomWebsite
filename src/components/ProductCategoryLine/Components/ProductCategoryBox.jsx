
import React from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import SeeMoreBtn from "../../Buttons/SeeMoreBtn";

export default function ProductCategoryBox({ children, Theme }) {
  
    const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  
    return (
      <>
      
  
      {isSmallScreen ? (
        <></>
      ) : (
        <VStack
          color={"black"}
          w={["30%", "20%", "20%", "15%", "15%"]}
          h={"300px"}
          align={"left"}
          justify={"top"}
          bgColor={Theme}
          p={"0.5%"}
          rounded={"md"}
          textAlign={"center"}
        >
          {children}
          <HStack
            justify={"center"}
            align={"end"}
            h={["50%", "60%", "60%", "60%", "60%"]}
          >
            <SeeMoreBtn />
          </HStack>
        </VStack>
      )}
          </>
    );
  }
  