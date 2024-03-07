
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
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, setsignUp, signInWithEmailPassword } from "../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ForgotPassword from "./ForgotPassword";



export default function FormSubmit({}) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const { user, isLoading, error, invalidCredential, signUp, forgotPassword } =
    useSelector((state) => state.auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        dispatch(signInWithEmailPassword({ email, password }));
      };
    
      const handelForgotPassword = () => {
        dispatch(resetPassword(email));
        console.log(resetPassword(email));
      };
    return (
    <form onSubmit={handleSubmit}>
    {invalidCredential ? (
      <>
        <Box
          w={"100%"}
          h={"30px"}
          bg={"#FED7D7"}
          mb={"15px"}
          border={" 2px dotted #FC8181"}
        >
          <HStack justify={"center"}>
            <Text fontWeight={450} color={"#9B2C2C"}>
              Email or Password Incorrect try{" "}
              <Button colorScheme="red" variant="link">
                Forgot password?
              </Button>{" "}
              or{" "}
              <Button colorScheme="orange" variant="link">
                Sign Up
              </Button>
            </Text>
          </HStack>
        </Box>
      </>
    ) : (
      <></>
    )}
    <FormControl>
      <FormLabel htmlFor="email"> Email</FormLabel>
      <Input
        id="email"
        type="email"
        w={"100%"}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
    <HStack mt={"10px"} justify="space-between">
      <Checkbox
        defaultChecked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      >
        Remember me
      </Checkbox>
      <Button
        colorScheme="teal"
        variant="link"
        size="sm"
        onClick={handelForgotPassword}
      >
        Forgot password?
      </Button>
    </HStack>

    <ForgotPassword forgotPassword={forgotPassword} email={email} />

    <Stack mt={"20px"} spacing="6">
      {isLoading && (
        <Progress p={"0px"} m={"0px"} size="xs" isIndeterminate />
      )}
      <Button type="submit">Sign in</Button>

      <HStack>
        <Divider />
        <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
          or continue with
        </Text>
        <Divider />
      </HStack>
    </Stack>
  </form>
  )
}
