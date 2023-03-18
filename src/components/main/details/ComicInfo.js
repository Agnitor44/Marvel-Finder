import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ComicInfo({ details }) {
  const { series, prices, pageCount, dates, creators } = details;
  const getFullDate = () => {
    if (!dates[0].date) return null;

    const convertedDate = new Date(dates[0].date);
    const year = convertedDate.getFullYear();
    const date = convertedDate.getDate();
    const month = convertedDate.getMonth();
    return `${date}.${month}.${year}`;
  };

  const getCreators = () => {
    let convertedCreators = "";
    creators.items?.map((item) => {
      convertedCreators =
        convertedCreators + (convertedCreators && ", ") + item.name;
    });

    return convertedCreators;
  };
  const renderRow = (label, value) => {
    return (
      <Flex w="100%" align={"center"} justify={"space-between"}>
        <Text color="gray.500" mr={5}>
          {label}
        </Text>
        <Text textAlign={"right"} fontWeight={"bold"}>
          {value || "No information"}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex px={5} w={["100%", null, "50%"]} flexDir={"column"}>
      {renderRow("series name:", series?.name)}
      {renderRow("price:", `$${prices[0]?.price}`)}
      {renderRow("page count:", pageCount)}
      {renderRow("page count:", pageCount)}
      {renderRow("creators", getCreators())}
      <Divider />
    </Flex>
  );
}
