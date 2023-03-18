import axios from "axios";

const rootUrl = "https://gateway.marvel.com/";

export const fetchComicDetails = async (
  id,
  setState,
  setError,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .get(
      `${rootUrl}v1/public/comics/${id}?apikey=${process.env.NEXT_PUBLIC_KEY}`,
      {}
    )
    .then((res) => {
      setError(null);
      setState(res.data.data.results[0]);
      setIsLoading(false);
    })
    .catch((e) => {
      setError(e.message);
      setIsLoading(false);
    });
};
