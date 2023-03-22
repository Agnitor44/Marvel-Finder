import ComicDetails from "@/components/main/ComicDetails";
import { add, sub } from "@/globalRedux/features/favoritesSlice";
import { fetchComicDetails } from "@/services/fetchComicDetails";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ComicDetailsContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.state.favorites.data);

  const isFavorite =
    favorites.findIndex((item) => item.id === details?.id) >= 0;
  useEffect(() => {
    if (id) {
      loadComicDetails();
    }
  }, [id]);

  const loadComicDetails = async () => {
    await fetchComicDetails(id, setDetails, setError, setIsLoading);
  };

  const favoriteHandler = () => {
    if (isFavorite) {
      dispatch(sub(details.id));
    } else {
      dispatch(add(details));
    }
  };

  return (
    <ComicDetails
      details={details}
      favoriteHandler={favoriteHandler}
      isFavorite={isFavorite}
      isLoading={isLoading}
      error={error}

    />
  );
}
