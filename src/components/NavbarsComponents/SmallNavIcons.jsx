import {
    Input,
    HStack,
    InputGroup,
    Highlight,
    Button,
    useBreakpointValue,
    Text,
    ButtonGroup,
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
    Spacer,
  } from "@chakra-ui/react";
  
  import { SearchIcon } from "@chakra-ui/icons";
  import { FaUser } from "react-icons/fa";
  import { FaHeart } from "react-icons/fa";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { FaBell } from "react-icons/fa";
  import { FaShoppingCart } from "react-icons/fa";
export default function SmallNavIcons() {
  return (
    <Menu>
              <MenuButton as={Button}  color={"black"} variant='outline'>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem gap={"10px"}> <FaUser size={"23px"} />  Profile</MenuItem>
                <MenuItem gap={"10px"}> <FaHeart size={"23px"} />Wishlist</MenuItem>
                <MenuItem gap={"10px"}> <FaBell size={"23px"} />Notifications</MenuItem>
                <MenuItem  gap={"10px"}> <FaShoppingCart size={"23px"} />Cart</MenuItem>
              
       

              </MenuList>
            </Menu>
  )
}
