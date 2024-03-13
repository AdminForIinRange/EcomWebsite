import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function SmallScreenProductBoard({ 
  Frontproducts,
  
  
  
  responsiveProductHeading,
  
  }) {
  

  return (
    <VStack>
  

      <HStack

       
        align={"start"}
        flexWrap={["wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
        justify={"center"}
        w={"100%"}
        h={"100%"}
      >

        
        <Box p={"2"} bgColor={Frontproducts[7].theme} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[7].product}
          </Text>
         

          <Box
            mt={"5px"}
            w={"100%"}
            h={"150px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[7].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"2"} bgColor={Frontproducts[6].theme} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[6].product}
          </Text>
         

          <Box
            mt={"5px"}
            w={"100%"}
            h={"150px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[6].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>


        <Box p={"2"} bgColor={Frontproducts[1].theme} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[1].product}
          </Text>
          
          <Box
            mt={"5px"}
            w={"100%"}
            h={"150px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[1].src + ")"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
      </HStack>
      <HStack
       
        align={"start"}
       
        justify={"center"}
        w={"100%"}
        h={"100%"}
      >
              <Box p={"2"}    bgColor={Frontproducts[8].theme} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[8].product}
          </Text>
          
          <Box
          
            mt={"5px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[8].src + ")"}
            bgPos={"center "}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>
       
        <Box p={"2"} bgColor={Frontproducts[3].theme} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[3].product}
          </Text>
         
          <Box
            mt={"5px"}
            w={"100%"}
            h={"100px"}
            rounded={"2xl"}
            bgSize={"cover"}
            bgImage={"url(" + Frontproducts[3].src + ")"}
            bgPos={"center "}
            bgRepeat={"no-repeat"}
          ></Box>
        </Box>

        <Box p={"2"} bgColor={Frontproducts[4].theme} w={"100%"} h={"100%"} rounded={"xl"}>
          <Text fontSize={responsiveProductHeading} fontWeight={"600"}>
            {Frontproducts[4].product}
          </Text>
          
          <Box
            mt={"5px"}
            w={"100%"}
            h={"100px"}
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
