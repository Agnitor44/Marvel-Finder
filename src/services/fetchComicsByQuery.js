import axios from "axios";

const rootUrl = "https://gateway.marvel.com/";

export const fetchComicsByQuery = async (
  query,
  setState,
  setApiData,
  offset,
  setError,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .get(
      `${rootUrl}v1/public/comics?titleStartsWith=${query}&limit=30&offset=${offset}&apikey=${process.env.NEXT_PUBLIC_KEY}`,
      {}
    )
    .then((res) => {
      const { results, total, count, limit } = res.data.data ?? {};
      setError(null);
      setState(results);
      setApiData({ total, count, limit });
      setIsLoading(false);
    })
    .catch((e) => {
      setError(e.message);
      setIsLoading(false);
    });
};
