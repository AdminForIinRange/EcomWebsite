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
import NavIcons from "./NavbarsComponents/NavIcons";
import SmallNavIcons from "./NavbarsComponents/SmallNavIcons";
export default function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <HStack h={"100px"} w={"100%"} justify={"center"} align={"center"}>
      <Text fontSize={"40px"} mr={{ base: "0px", md: "40px" }}>
        🦑
      </Text>

      <InputGroup
        transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
        _hover={{
          transform: "scale(1.01)",
        }}
        w={"40%"}
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

      <Button borderLeftRadius={"0px"} w={"10px"}>
        <SearchIcon />
      </Button>
      <Stack flexDir={"row"} justify={"center"} align={"center"}>
        {isSmallScreen ? <SmallNavIcons /> : <NavIcons />}
      </Stack>
    </HStack>
  );
}
