import { useState, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';

const usePost = (url: string, options: any = {}) => {
  const history = useHistory();
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
  }, [url]);

  return { postApi, response, error };
};

export default usePost;