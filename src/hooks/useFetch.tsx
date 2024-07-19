import { useEffect, useState } from "react";

export const useFetch = (url, params) => {
  const [state, setState] = useState({ loading: true });
  if (!url) {
    return state;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, params);
        const data = await response.json();
        setState({ data: data });
      } catch (error) {
        console.log("Ошибка загрузки: ", error);
        setState({ error: error });
      }
    };
    fetchData();
  }, []);
  return state;
};
