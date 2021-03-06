import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const useGet = (url: string) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const Authorization = localStorage.getItem('jwtToken') || ''

  useEffect(() => {
    const FetchData = async () => {
      try {
        await axios.get(url, {
          headers: {
            Authorization,
          }
        }).then((response: AxiosResponse) => {
          setResponse(response.data);
        }).catch(function (error: AxiosError) {
          console.log(error);
        });
        setResponse(response);
      } catch (error: any) {
        setError(error);
      }
    };
    FetchData();
    // eslint-disable react-hooks/exhaustive-dep
  }, [url]);
  return { response, error };
};