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
import { setForgotPassword } from "../features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ForgotPassword({forgotPassword, email}) {
  const dispatch = useDispatch();
  
  return (
    <Modal isOpen={forgotPassword}>
    <ModalOverlay />
    <ModalContent>
      <VStack
        justify={"center"}
        align={"center"}
        p={"2%"}
        mb={"30px"}
      >
        <Text fontWeight={500} fontSize={"30px"}>
          🪵
        </Text>

        <Text fontWeight={500} fontSize={"20px"}>
          Password Change Request
        </Text>

        <Text>You have sumbited a password change request</Text>
        <Divider w={"60%"} />
        <Text>We Have emailed a Rest Link to: </Text>
        <Text fontSize={"20px"} color={"teal"}>
          {email}
        </Text>
      </VStack>

      <ModalCloseButton
        onClick={() => {
          dispatch(setForgotPassword(false));
        }}
      />
    </ModalContent>
  </Modal>
  )
}
