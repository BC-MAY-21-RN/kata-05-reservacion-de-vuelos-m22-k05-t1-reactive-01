import React, {useState} from 'react';
import DataJson from '../database/data.json';

export default function useFrom() {
  const [selected, setSelected] = useState();
  const matchCountry = param => {
    let index = {};
    DataJson.map(function (element) {
      if (element.key === param) {
        index = element;
      }
    });
    return index;
  };

  return {selected, setSelected, matchCountry};
}
