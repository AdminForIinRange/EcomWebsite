import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  Checkbox,
  CardBody,
  Highlight,
  Link,
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
  Progress,
  AvatarGroup,
  Container,
  VisuallyHidden,
  Spacer,
  Icon,
  TagLabel,
} from "@chakra-ui/react";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
  setEmailInUse,
  sethasNotPasswordVerified,
  setweakPassword,
} from "../../features/Auth/authSlice";
import { GoogleIcon } from "./ProviderIcons";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user,
    isLoading,
    error,
    emailInUse,
    hasNotPasswordVerified,
    weakPassword,
  } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password, rePassword);
    if (password === rePassword) {
      dispatch(registerWithEmailAndPassword({ email, password }));
      dispatch(sethasNotPasswordVerified(false));
    } else {
      dispatch(sethasNotPasswordVerified(true));

      console.log(password, rePassword);
    }
  };
  //when testing the length of your testing password matters

  useEffect(() => {
    if (emailInUse) {
      dispatch(setEmailInUse(true));
    }
  }, [emailInUse, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);


if (password.length  > 5){
  dispatch(setweakPassword(false))
   
}

  return (
    <Box
      py={{ base: "0", sm: "8" }}
      px={{ base: "4", sm: "10" }}
      bg={{ base: "transparent", sm: "bg.surface" }}
      boxShadow={{ base: "none", sm: "md" }}
      borderRadius={{ base: "none", sm: "xl" }}
      mt={"30px"}
      bgColor={"white"}
      w={"600px"}
      h={"100%"}
      p={"3%"}
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email"> Email </FormLabel>
          <Input
            id="email"
            type="email"
            w={"100%"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailInUse ? (
            <>
              <Box
                w={"100%"}
                h={"30px"}
                bg={"#FEEBC8"}
                mt={"10px"}
                border={" 2px dotted #F6AD55"}
              >
                <HStack justify={"center"}>
                  <Text fontWeight={450} color={"#DD6B20"}>
                    The Email you have entered is already Signed Up{" "}
                    <Button colorScheme="yellow.100" variant="link">
                      Login
                    </Button>
                  </Text>
                </HStack>
              </Box>
            </>
          ) : (
            <></>
          )}
        </FormControl>
        <FormControl mt={"20px"}>
          <FormLabel htmlFor="password">password</FormLabel>
          <Input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            w={"100%"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {weakPassword ? (
          <Box
            w={"100%"}
            h={"30px"}
            bg={"#FEEBC8"}
            mt={"10px"}
            border={" 2px dotted #F6AD55"}
          >
            <HStack justify={"center"}>
              <Text fontWeight={450} color={"#DD6B20"}>
                Password should be at least 6 characters
              </Text>
            </HStack>
          </Box>
        ) : (
          <></>
        )}

        <FormControl mt={"20px"}>
          <FormLabel htmlFor="password">password</FormLabel>
          <Input
            id="rePassword"
            type="password"
            required
            autoComplete="current-password"
            w={"100%"}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </FormControl>

        {hasNotPasswordVerified ? (
          <>
            <Box
              w={"100%"}
              h={"30px"}
              bg={"#FEEBC8"}
              mt={"10px"}
              border={" 2px dotted #F6AD55"}
            >
              <HStack justify={"center"}>
                <Text fontWeight={450} color={"#DD6B20"}>
                  The passwords do not match
                </Text>
              </HStack>
            </Box>
          </>
        ) : (
          <></>
        )}
        <HStack mt={"10px"} justify="space-between">
          <Checkbox
            defaultChecked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          >
            Remember me
          </Checkbox>
        </HStack>
        <Stack mt={"20px"} spacing="6">
          {isLoading && (
            <Progress p={"0px"} m={"0px"} size="xs" isIndeterminate />
          )}
          <Button type="submit">Sign Up</Button>
          <HStack>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              or continue with
            </Text>
            <Divider />
          </HStack>
        </Stack>
      </form>

      {error && console.log(error)}

      <HStack justify={"center"} align={"center"} mt={"10px"}>
        <ButtonGroup spacing="4">
          <Button key="Google" w={"100px"} onClick={handleSignInWithGoogle}>
            <VisuallyHidden>Sign in with Google</VisuallyHidden>
            <GoogleIcon />
          </Button>
        </ButtonGroup>
      </HStack>
    </Box>
  );
}
