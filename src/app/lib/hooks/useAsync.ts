import { useState, useEffect } from "react";

type AsyncState<T> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  fetch: () => Promise<void>;
};

const useAsync = <T>(asyncFunction: () => Promise<T>): AsyncState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [asyncFunc, setAsyncFun] = useState(asyncFunction);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetch = () => {
    setIsLoading(true);
    asyncFunction()
      .then((result) => setData(result))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  return { data, error, isLoading, fetch, setAsyncFun };
};

export default useAsync;
