import React from "react";
import ProductBoard from "../ProductBoard/ProductBoard";
import TitleBanner from "../../components/Banner/TitleBanner";
import { Box, VStack } from "@chakra-ui/react";
import BannerTwo from "../../components/Banner/BannerTwo";
import BannerThree from "../../components/Banner/BannerThree.jsx";
import ProductCategoryLineOne from "../../components/ProductCategoryLine/ProductCategoryLineOne.jsx";
import ProductCategoryLineTwo from "../../components/ProductCategoryLine/ProductCategoryLineTwo.jsx";
import TopBanner from "../../components/Banner/TopBanner.jsx";
import TopCategoryNav from "../../components/NavbarsComponents/TopCategoryNav.jsx";

export default function Home() {
  return (
    <VStack
      px={["1%", "1%", "2%", "3%", "3%"]}
      gap={"15px"}
      h={"100%"}
      w={"100%"}
    >
      <TopBanner />
      <TopCategoryNav />

      <TitleBanner />
      <ProductBoard />
      <Box w={"100%"} h={"100%"} py={["1%", "1%", "2%", "2%", "2%"]}>
        <BannerTwo />
      </Box>

      <ProductCategoryLineTwo />

      <Box w={"100%"} h={"100%"} py={["1%", "1%", "2%", "2%", "2%"]}>
        <BannerThree />
      </Box>

      <ProductCategoryLineOne />
    </VStack>
  );
}
