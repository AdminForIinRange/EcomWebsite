import { Button, ButtonGroup, Avatar, Box } from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function NavIcons() {
  return (
    <>
      <ButtonGroup
        variant={"ghost"}
        colorScheme="transparent"
        bgColor={"transparent"}
        ml={"20px"}
        p={"0px"}
        color="gray"
      >
        <Button _hover={{ transform: "scale(1.2)" }}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size={"sm"}
          />
        </Button>
        <Button _hover={{ transform: "scale(1.2)" }}>
          <FaHeart size={"23px"} />
        </Button>
        <Button _hover={{ transform: "scale(1.2)" }}>
          <FaBell size={"23px"} />
        </Button>

        <Button _hover={{ transform: "scale(1.2)" }}>
          <Box
            position={"absolute"}
            top={"10px"}
            right={"10px"}
            bgColor={"red"}
            w={"10px"}
            h={"10px"}
            borderRadius={"50%"}
          ></Box>

          <FaShoppingCart size={"23px"} />
        </Button>
      </ButtonGroup>
    </>
  );
}
