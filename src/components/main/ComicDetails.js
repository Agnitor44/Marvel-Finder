import { Divider, Flex, IconButton, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import ComicImagesSlider from "./details/ComicImagesSlider";
import ComicInfo from "./details/ComicInfo";

export default function ComicDetails({
  details,
  favoriteHandler,
  isFavorite,
  isLoading,
  error,
}) {
  const { title, images, id } = details ?? {};
  const renderTopBar = () => {
    return (
      <Flex w="100%" align={"center"} justify={"space-between"}>
        <Flex>
          <Text fontSize={32} color="black">
            {title}
          </Text>
        </Flex>

        <IconButton bg="transparent" onClick={() => favoriteHandler()}>
          <IoIosHeart size={22} color={isFavorite && "#f4141c"} />
        </IconButton>
      </Flex>
    );
  };

  const renderMain = () => {
    return (
      <Flex
        flexDir={["column", null, "row"]}
        align="flex-start"
        justify={"center"}
      >
        <ComicImagesSlider images={images} />
        <ComicInfo details={details} />
      </Flex>
    );
  };

  if (details && !isLoading) {
    return (
      <Flex minH="100vh" flexDir={"column"}>
        {renderTopBar()}
        <Divider my={5} />
        {renderMain()}
      </Flex>
    );
  }
  if (error) {
    return (
      <Flex h="100vh" w="100%" align={"center"} justify={"center"}>
        {error}
      </Flex>
    );
  }
  return (
    <Flex h="100vh" w="100%" align={"center"} justify={"center"}>
      <Spinner />
    </Flex>
  );
}
