import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IoIosImage } from "react-icons/io";
// Default theme
import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/core";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function ComicImagesSlider({ images }) {
  const options = {
    height: "100%",
    width: "100%",
    wheel: true,
    pagination: false,
    perPage: 1,
    type: "loop",
    gap: "2px",
    focus: "center",
    arrows: true,
    autoplay: true,
    start: 1,
    interval: 5000,
    padding: "1px",
  };

  const renderSlide = (item) => {
    return (
      <SplideSlide>
        <Image width={"100%"} src={`${item.path}.${item.extension}`} />
      </SplideSlide>
    );
  };
  if ([...images].length > 0) {
    return (
      <Flex w={["100%", null, "50%"]} padding={0}>
        <Splide options={options}>
          {images.map((item) => renderSlide(item))}
        </Splide>
      </Flex>
    );
  }
  return (
    <Flex
      flexDir={"column"}
      color="gray.500"
      align={"center"}
      w={["100%", null, "50%"]}
    >
      <Text fontSize={"24px"}>No images</Text>
      <IoIosImage size={"56px"} />
    </Flex>
  );
}
