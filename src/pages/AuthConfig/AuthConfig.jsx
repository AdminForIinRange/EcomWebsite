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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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

import { GoogleIcon } from "./ProviderIcons";
import { useState, useEffect, useDisclosure } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPassword,
  setForgotPassword,
  setUserData,
  setinvalidCredential,
  setsignUp,
  signInWithGoogle,
  signOutUser,
} from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { signInWithEmailPassword } from "../../features/Auth/authSlice";

import SignUp from "./SignUp";
import ForgotPassword from "../../components/ForgotPassword";
import LoginHeading from "../../components/Header";
import FormSubmit from "../../components/FormSubmit";

export default function AuthConfig() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, error, invalidCredential, signUp, forgotPassword } =
    useSelector((state) => state.auth);

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };
  const providers = [{ name: "Google", icon: <GoogleIcon /> }];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signInWithEmailPassword({ email, password }));
  };

  const handelForgotPassword = () => {
    dispatch(resetPassword(email));
    console.log(resetPassword(email));
  };

  useEffect(() => {
    if (invalidCredential) {
      dispatch(setinvalidCredential(true));
    }
  }, [invalidCredential]);

  useEffect(() => {
    if (user) {
      dispatch(setUserData(user));

      navigate("/home");
    } else {
      dispatch(signOutUser());
      navigate("/");
    }
  }, [user, dispatch]);

  //clean effcts

  return (
    <VStack w={"100%"} h={"100%"} justify={"center"} align={"center"} p={"1%"}>
      <LoginHeading signUp={signUp} />

      {signUp ? (
        <>
          <SignUp />
        </>
      ) : (
        <>
          <Box
            py={{
              base: "0",
              sm: "8",
            }}
            px={{
              base: "4",
              sm: "10",
            }}
            bg={{
              base: "transparent",
              sm: "bg.surface",
            }}
            boxShadow={{
              base: "none",
              sm: "md",
            }}
            borderRadius={{
              base: "none",
              sm: "xl",
            }}
            mt={"30px"}
            bgColor={"white"}
            w={{
              base: "350px",
              xsm: "350px",
              ssm: "500px",
              sm: "500px",
              md: "600px",
              lg: "600px",
              xl: "600px",
              xxl: "600px",
              xxxl: "600px",
            }}
            h={"100%"}
        
          >
           
           <FormSubmit
            />

            <HStack justify={"center"} align={"center"} mt={"10px"}>
              <ButtonGroup spacing="4">
                {providers.map(({ name, icon }) => (
                  <Button
                    key={name}
                    w={"100px"}
                    onClick={handleSignInWithGoogle}
                  >
                    <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                    {icon}
                  </Button>
                ))}
              </ButtonGroup>
            </HStack>
          </Box>
        </>
      )}
    </VStack>
  );
}
