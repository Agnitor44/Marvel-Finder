import ComicDetails from "@/components/main/ComicDetails";
import ComicsList from "@/components/main/ComicsList";
import PageTitle from "@/components/main/PageTitle";
import { fetchComicDetails } from "@/services/fetchComicDetails";

import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FavoritesContainer() {
  const favorites = useSelector((state) => state.favorites.data);

  return (
    <>
      <PageTitle title={"Favorites"} />
      <ComicsList comics={favorites} isLoading={false} />
    </>
  );
}
