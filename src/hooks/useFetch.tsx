import { useEffect, useState } from "react";

export const useFetch = (url, params) => {
  const [state, setState] = useState([]);

  try {
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setState(data);
      };
      fetchData();
    }, []);
    return state;
  } catch (e) {
    console.log(e);
  }
};
