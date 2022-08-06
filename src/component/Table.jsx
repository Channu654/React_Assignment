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


const colunms = [
  {
    name: 'Symbol',
    selector: (row) => row.symbol,
  },
  {
    name: 'Description',
    selector: (row) => row.description,
  },
  {
    name: 'Underlying Asset',
    selector: (row) => row.underlying_asset,
  },
];



  useEffect(() => {
    productData();
  }, []);

  
//   console.log(data.result);
  return (
    <div>
       <DataTables colunms = {colunms} data = {data}/>
    </div>
  );
};

export default Table;
