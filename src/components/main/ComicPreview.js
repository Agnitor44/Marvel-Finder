import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

export default function ComicPreview({ item }) {
  const { thumbnail, id, title, dates, prices } = item;
  const [isMouseOver, setIsMouseOver] = useState(false);
  const url = `/details/${id}?title=${title}`;

  const renderOverlay = () => {
    return (
      <Flex
        opacity={isMouseOver ? 1 : 0}
        position={"absolute"}
        transition={"0.3s"}
        bg={"blackAlpha.800"}
        w="100%"
        h="100%"
        zIndex={2}
        py={"30px"}
        px={2}
      >
        <Link href={url} target="__blank__">
          <Text noOfLines={1} fontWeight={"bold"} color={"white"}>
            {title}
          </Text>
        </Link>
      </Flex>
    );
  };

  return (
    <Flex flexDir={"column"} width={"234px"} mx={"10px"}>
      <Flex
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        boxShadow="4px 4px 4px 0px rgba(66, 68, 90, 1)"
        border={"gray 2px solid"}
        borderColor="gray.200"
        overflow={"hidden"}
        position={"relative"}
        width={"100%"}
        height="365px"
      >
        <Flex>
          <Image w={"100%"} src={`${thumbnail.path}.${thumbnail.extension}`} />
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          zIndex="3"
          position={"absolute"}
          bg={"blackAlpha.800"}
          w={"65px"}
          height={"25px"}
          top={0}
        >
          <Text color={"white"}>{`$${prices[0].price}` || "$ ??"}</Text>
        </Flex>
        {renderOverlay()}
      </Flex>

      <Flex
        py={2}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace="wrap"
        w={"100%"}
        height={"50px"}
        bottom={0}
      >
        <Link noOfLines={1} w={"100%"} href={url} target="__blank__">
          <Text noOfLines={1} fontWeight={"bold"} color={"black"}>
            {title}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
