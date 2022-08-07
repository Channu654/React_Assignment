import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTables from './DataTables';

const Table = () => {
  const [data, setData] = useState([]);
  const productData = () => {
    return axios
      .get('https://api.delta.exchange/v2/products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productData();
  }, []);

  //   console.log(data.result);
  return (
    <div>
      <DataTables data={data} />
    </div>
  );
};

export default Table;
