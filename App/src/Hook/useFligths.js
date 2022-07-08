import React, {useEffect, useState} from 'react';
import {getJourney, getData} from '../database/friestore';
export default function useFligts() {
  const [fligths, setFlights] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getDataBd();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getDataBd = async () => {
    const resp = await getData();
    if (resp.length > 0) {
      setFlights(resp);
    } else {
      alert('no hay mas datos');
    }
  };

  return {fligths};
}
