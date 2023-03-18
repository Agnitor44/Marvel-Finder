import ComicsList from "@/components/main/ComicsList";
import PageTitle from "@/components/main/PageTitle";
import { fetchComics } from "@/services/fetchComics";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function MainContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadComics();
  }, []);

  const loadComics = async () => {
    await fetchComics(setComics, setError, setIsLoading);
  };

  return (
    <>
      <PageTitle title={"New comics!"} />
      <ComicsList comics={comics} isLoading={isLoading} error={error} />
    </>
  );
}
