import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  responsiveHeading,
  responsiveSubheading,
  responsiveTitleBanner,
  responsiveTopBanner,
  responsiveParagraph,
} from "../../data/GlobalPresets/Presets";

const categories = [
  "Technology",
  "Fashion",
  "Gadgets",
  "Home / Garden",
  "Trending",
  "Recents",
  "Health",
  "Deals",
  "Secret Page",
];
export default function TopCategoryNav() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  return (
    <>
      {isSmallScreen ? (
        <></>
      ) : (
        <HStack
          w={"100%"}
          px={"5px"}
          height={"50px"}
          justify={"center"}
          align={"center"}
          bgColor={"#F6F6F6"}
          rounded={"2xl"}
          gap={"10px"}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="ghost"
              fontWeight={"500"}
              fontFamily={"Raleway"}
              colorScheme="transparent"
              fontSize={responsiveParagraph}
            >
              {category}
            </Button>
          ))}
        </HStack>
      )}
    </>
  );
}
