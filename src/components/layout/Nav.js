import {
  Flex,
  IconButton,
  Image,
  Input,
  Button,
  Text,
  FormLabel,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { IoIosSearch, IoIosHeart } from "react-icons/io";
export default function Nav() {
  const inputRef = useRef();
  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    const string = inputRef.current.value;
    if (!string) return null;
    // router.push({ path: '/search', params: { query: string } })
    router.push(`/search?query=${string}`);
  };

  const favUrl = "/favorites";

  const renderInput = () => {
    return (
      <Flex h={"80%"} mx={"10px"} justify={"center"} alignItems={"center"}>
        <Input
          ref={inputRef}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          bg={"white"}
          h={"100%"}
          width={["150px", null, null, "300px"]}
        />
        <IconButton
          type="submit"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          bg="#f4141c"
          color="white"
          my={"10px"}
          h={"100%"}
        >
          <IoIosSearch size={20} />
        </IconButton>
      </Flex>
    );
  };
  return (
    <Flex w={"100%"} height={"60px"} bg="gray.200" padding={"10px"}>
      <Flex
        m={"0 auto"}
        maxWidth={"1440px"}
        w={"100%"}
        justify={"space-between"}
      >
        <Flex
          onSubmit={searchHandler}
          as="form"
          height={"100%"}
          justify={"center"}
          alignItems={"center"}
        >
          <LinkBox height={"100%"}>
            <LinkOverlay href="/">
              <Image height={"100%"} src="/marvel.png" />
            </LinkOverlay>
          </LinkBox>

          {renderInput()}
        </Flex>

        <Flex>
          <Link href={favUrl} target="__blank__">
            <Button bg="white">
              <Text mr={"5px"}>Favorites</Text>
              <IoIosHeart size={20} />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
