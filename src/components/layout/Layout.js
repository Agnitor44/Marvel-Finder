import { Flex } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <Flex flexDir={"column"}>
      <Nav />
      <Flex
        backgroundImage={"/background.jpg"}
        backgroundAttachment="fixed"
        w={"100%"}
        flexDirection={"column"}
      >
        <Flex bg={"#f4141b6e"}>
          <Flex
            padding={"20px 5%"}
            bg="white"
            maxW={"1720px"}
            w={"100%"}
            m={"0 auto"}
            flexDirection={"column"}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
