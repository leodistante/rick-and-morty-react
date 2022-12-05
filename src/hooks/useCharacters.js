import { useState, useEffect } from "react";
import { getCharactersPage } from "../api/axios";

const useCharacters = (page = 1) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getCharactersPage(page, { signal })
      .then((data) => {
        setResults((prev) => [...prev, ...data.results]);
        setHasNextPage(Boolean(data.info.next.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [page]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default useCharacters;
