import Pagination from "@/components/layout/Pagination";
import PageTitle from "@/components/main/PageTitle";
import { fetchComicsByQuery } from "@/services/fetchComicsByQuery";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ComicsList from "../components/main/ComicsList";

export default function ComicsByQueryContainer() {
  const tableStateUpdateRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState(null);
  const [error, setError] = useState(null);
  const [apiInfo, setApiInfo] = useState({
    count: 0,
    limit: 30,
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const query = router.query.query;

  useEffect(() => {
    if (query) {
      loadComics();
    }
  }, [query, currentPage]);

  useEffect(() => {
    if (query) {
      setCurrentPage(0);
    }
  }, [query]);

  const LoadNewComics = (selectedObject) => {
    const offset = selectedObject.selected * apiInfo.count;
    setCurrentPage(offset);
  };
  const loadComics = async () => {
    await fetchComicsByQuery(
      query,
      setComics,
      setApiInfo,
      currentPage,
      setError,
      setIsLoading
    );
  };

  return (
    <Flex flexDir={"column"}>
      <PageTitle title={`Searches for "${query}"`} />
      <ComicsList isLoading={isLoading} error={error} comics={comics} />
      <Pagination
        load={LoadNewComics}
        apiInfo={apiInfo}
        visible={comics?.length > 0}
        currentPage={currentPage}
      />
    </Flex>
  );
}
