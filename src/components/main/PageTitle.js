import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function PageTitle({ title }) {
  return (
    <Flex flexDir={"column"}>
      <Text fontWeight={"bold"} fontSize={32}>
        {title}
      </Text>
      <Divider mb={5} />
    </Flex>
  );
}
