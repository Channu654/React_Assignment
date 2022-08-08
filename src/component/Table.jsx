import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTables from './DataTables';

const Table = () => {
  const [data, setData] = useState([]);
  const [Page ,setPage] =useState([])
  

  const productData = () => {
    return axios
      .get(`https://api.delta.exchange/v2/products/${Page}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productData();
  }, []);
//pagination 
  // const indexOflastPage = currentPage * postPerpage
  // const indexOffirstPage = indexOflastPage-postPerpage
  // const currentPost = data.slice(indexOffirstPage , indexOflastPage)
  
  //   console.log(data.result);
  return (
    <div>
      <DataTables data={data} />
    </div>
  );
};

export default Table;
