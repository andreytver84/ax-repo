import { useEffect, useState } from "react";

type Params = {
  method?: string;
  headers?: {
    [key: string]: string;
  };
  body?: unknown;
};
// interface useFetchResult<T, U, B> {
//   data: T;
//   error: U;
//   loading: B;
// }

// const defaultState: useFetchResult<
//   object | null,
//   object | null | unknown,
//   boolean
// > = {
//   data: null,
//   error: null,
//   loading: false,
// };

interface useFetchResult {
  data: object | null | [];
  error: object | null | unknown;
  loading: boolean;
}

const defaultState: useFetchResult = {
  data: null,
  error: null,
  loading: false,
};

export const useFetch = (url: string, params: Params) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...defaultState, loading: true });
        const response = await fetch(url, {
          method: params.method || "GET",
          headers: params.headers,
          body: JSON.stringify(params.body),
        });
        const data = await response.json();
        setState((prevState) => ({ ...prevState, data: data }));
      } catch (error: unknown) {
        console.log("Ошибка загрузки: ", error);
        setState({ ...defaultState, error: error });
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };
    fetchData();
  }, [url]);
  return state;
};
