import { useEffect, useState } from 'react';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const makeUrlWithSearchParams = (url, params) => `${url}?${new URLSearchParams(params).toString()}`;

export const useFetch = (url) => {
  const [state, setState] = useState(initialState);

  const fetchData = async (refParams) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const fetchUrl = refParams ? makeUrlWithSearchParams(url, refParams.params) : url;

    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error('Error');
      }
      const data = await response.json();
      setState((prev) => ({
        ...prev,
        isLoading: false,
        data,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error,
      }));
    }
  };

  const refetch = (params) => fetchData(params);

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, []);

  return { ...state, refetch };
};
