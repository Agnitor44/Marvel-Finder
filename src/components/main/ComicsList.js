import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import ComicPreview from "./ComicPreview";

export default function ComicsList(props) {
  const { comics, isLoading, error } = props;

  if (isLoading) {
    return (
      <Flex minH={"120vh"} align={"center"} justify={"center"}>
        <Spinner />
      </Flex>
    );
  }
  if (error) {
    return (
      <Flex h="100vh" w="100%" align={"center"} justify={"center"}>
        {error}
      </Flex>
    );
  } else {
    if (comics?.length > 0) {
      return (
        <SimpleGrid
          minH={"120vh"}
          bg={"white"}
          columns={[1, null, 2, 3, 4, 5]}
          gap={5}
          m={"0 auto"}
        >
          {comics.map((item) => (
            <ComicPreview item={item} />
          ))}
        </SimpleGrid>
      );
    }
    return (
      <Flex minH={"120vh"} align={"center"} justify={"center"}>
        <Text color="gray.500">Comics are not found</Text>
      </Flex>
    );
  }
}
