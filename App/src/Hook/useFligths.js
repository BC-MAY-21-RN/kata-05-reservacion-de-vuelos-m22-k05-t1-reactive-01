import React, {useEffect, useState} from 'react';
import {getJourney, getData} from '../database/friestore';
export default function useFligts() {
  const [fligths, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      getDataBd();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getDataBd = async () => {
    setIsLoading(true);
    try {
      const resp = await getData();
      if (resp.length > 0) {
        setFlights(resp);
        setIsSuccess(true);
        setIsLoading(false);
      } else {
        alert('no hay mas datos');
        setIsSuccess(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false)
      setIsSuccess(false)
      console.log(error);
    }
  };

  return {fligths, getDataBd, isSuccess, isLoading};
}
/*
  useEffect(() => {
    const query = getDataBd();
  }, [fligths]);

  const getDataBd = async () => {
    const {arrayFlights, usersQuerySnapshot} = await getData();
    if (arrayFlights.length > 0) {
      setFlights(arrayFlights);
    } else {
      alert('no hay mas datos');
    }
    return usersQuerySnapshot;
  };

  return {fligths};
}
*/
