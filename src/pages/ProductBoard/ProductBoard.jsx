import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function ProductBoard() {

    const responsiveSubheading = ['sm', 'sm', 'sm', 'md', 'lg'];

         
    const responsiveHeading = ["lg", "lg", "2xl", "2xl", "4xl"];

        
    
  return (
    <Box p={"0% 4%"}>
        <VStack align={"left"} justify={"left"}>
        <Text  fontSize={responsiveHeading} fontFamily={"Raleway"} fontWeight={"700"}>
        Featured Porducts     
</Text>
<Text  fontSize={responsiveSubheading} fontFamily={"Raleway"} >
Discover the Best with Our Featured Product! 
</Text>


        </VStack>
      


     <VStack>


     </VStack>

        
    </Box>
  )
}
