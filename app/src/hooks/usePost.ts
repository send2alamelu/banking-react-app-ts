import { useState, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const usePost = (url: string, options: any = {}) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const postApi = useCallback(async (body: any = {}) => {
    try {
      axios.post(url, body, {
        headers: {
          Authorization: localStorage.getItem('jwtToken') || '',
        },
        ...options
      }).then((response: AxiosResponse) => {
        setResponse(response.data);
      }).catch(function (error: AxiosError) {
        console.log(error);
      });
    } catch (error: any) {
      setError(error);
    }
  }, [url, options]);

  return { postApi, response, error };
};

export default usePost;