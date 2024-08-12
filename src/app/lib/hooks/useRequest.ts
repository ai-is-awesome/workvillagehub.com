import axios from "axios";
import { useState } from "react";

interface Options {
  url: string;
  method: "post" | "get" | "put" | "delete";
  data?: any;
}

const useRequest = (options: Options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios(options);
      const result = await response.data;
      setData(result);
      return result;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchData };
};

export default useRequest;
