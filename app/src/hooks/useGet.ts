import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from '../constants/RoutePath';

const { LOGIN } = ROUTE_PATH;

const useGet = (url: string, options: any = {}) => {
  const history = useHistory();
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      // Go to Login screen when there is no token available
      if (!localStorage.getItem('jwtToken')) {
        history.push(LOGIN);
      }

      try {
        await axios.get(url, {
          headers: {
            Authorization: localStorage.getItem('jwtToken'),
          },
          ...options
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
  }, [url]);
  return { response, error };
};

export default useGet;