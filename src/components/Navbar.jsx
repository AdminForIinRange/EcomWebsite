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
  Avatar,
  AvatarBadge,

  InputRightAddon,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  Box,

} from "@chakra-ui/react";

import {SearchIcon } from '@chakra-ui/icons'
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  
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
<Stack flexDir={"row"}    w={{base:"",
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

</>  :<ButtonGroup variant={"ghost"} colorScheme="transparent" bgColor={"transparent"} ml={"20px"} p={"0px"} color='gray' >
  <Button _hover={{transform: "scale(1.2)"}}  >
  <FaUser size={"23px"} />
  </Button>
  <Button  _hover={{transform: "scale(1.2)"}}>
  <FaHeart size={"23px"}/>
  </Button>
  <Button  _hover={{transform: "scale(1.2)"}}>
  <FaBell  size={"23px"}/>
  </Button>

  <Button  _hover={{transform: "scale(1.2)"}}>
 
 <Box position={"absolute"} top={"10px"} right={"10px"}  bgColor={"red"} w={"10px"} h={"10px"} borderRadius={"50%"}>
  
 </Box>

  <FaShoppingCart   size={"23px"} />
  </Button>

</ButtonGroup>}

</Stack>


   </HStack>
  )
}
