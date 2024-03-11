import {
 
  Input,

  HStack,

  InputGroup,

  Highlight,

  Button,
  useBreakpointValue,
  Text,
  ButtonGroup ,

  VStack,

  InputRightAddon,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,

} from "@chakra-ui/react";

import {SearchIcon } from '@chakra-ui/icons'
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });

  
  return (
   <HStack  h={"100px"} w={"100%"} justify={'center'} align={"center"} >

    <Text fontSize={"40px"} mr={"5px"}> 
    🦑
    </Text>
    
    <InputGroup
    
    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
    _hover={{
      transform: "scale(1.01)",
     
    }}
    w={"40%"}
    minW={"40%"}
    h={"40px"}
    size={"lg"}
    variant="filled"
    borderRadius={"20px"}
    bgColor={"#F5F5F5"}
  >
    <Input
      borderRadius={"20px"}
      borderWidth={"0px"}
      h={"100%"}
      fontSize={"16px"}
      placeholder="Topic of Interest"
      borderRightRadius={"5px"}
      transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"

      
    />
   
  </InputGroup>

  <Button    borderLeftRadius={"0px"}     w={"10px"} >
       <SearchIcon  />
        </Button>
<Stack flexDir={"row"}  ml={"5px"} gap={"40px"} w={{base:"",
}} justify={"center"} align={"center"} >

{isSmallScreen?  <>
  <Menu>
              <MenuButton as={Button}  color={"black"} variant='outline'>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Main</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuItem>Dashboard</MenuItem>
       

              </MenuList>
            </Menu>

</>  :<ButtonGroup variant={"ghost"} colorScheme="transparent" bgColor={"transparent"}  >
  <Button _hover={{transform: "scale(1.2)"}}>
  <FaUser size={"21px"}/>
  </Button>
  <Button  _hover={{transform: "scale(1.2)"}}>
  <FaHeart size={"21px"}/>
  </Button>

</ButtonGroup>}

</Stack>


   </HStack>
  )
}
