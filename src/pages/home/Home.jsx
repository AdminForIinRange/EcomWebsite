import React, { useState,useEffect } from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  HStack,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Wrap,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Grid,
  GridItem,
  Image,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../features/Auth/authSlice";



export default function Home() {const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOutUser());
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      {error && (
        <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
          Error: {error}
        </div>
      )}
      <HStack justify={"center"} ml={"50px"} mr={"50px"} gap={"50px"}>
        <ButtonGroup textColor={"black"} colorScheme="blue">
          {user ? (
            <Button w={"100px"} onClick={handleSignOut}>
              Logout
            </Button>
          ) : (
            <Button w={"100px"}>Login</Button>
          )}
        </ButtonGroup>
      </HStack>
      <NavLink to="/">Link to Auth</NavLink>
    </div>
  );
}