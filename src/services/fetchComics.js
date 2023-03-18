import axios from "axios";
const rootUrl = "https://gateway.marvel.com/";

export const fetchComics = async (setState, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(`${rootUrl}v1/public/comics?apikey=${process.env.NEXT_PUBLIC_KEY}`, {})
    .then((res) => {
      setError(null);
      setState(res.data.data.results);
      setIsLoading(false);
    })
    .catch((e) => {
      setError(e.message);
      setIsLoading(false);
    });
};
