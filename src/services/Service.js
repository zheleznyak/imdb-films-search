import { useEffect, useState } from "react";
import axios from "axios";

export function useFilmsList(initialState = null, title) {
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    let didCancel = false;

    (async function getFilmsList() {
      await axios({
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/find",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key": "802faed081msh4d1a8b1e1003ba8p154656jsne0f37f0aba8b"
        },
        params: {
          q: title
        }
      }).then(response => {
        if (!didCancel) {
          const data = response.data.data ? response.data.data : response.data;
          setResult(data);
        }
      });
    })();

    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line
  }, []);

  return result;
}
