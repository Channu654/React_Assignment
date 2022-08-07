import React from 'react';

const DataTables = ({ data }) => {
  console.log('data:', data);

  return (
    <div style={{ border: '1px solid black' }}>
      <tbody >
        <tr>
          <th>Symbol</th>
          <th>Description</th>
          <th>Underlying Asset</th>
          <th>Mark Price</th>
        </tr>
        {data.result?.map((item) => {
          return (
            <tr style={{ border: '1px solid black' }} key={item.id}>
              <td style={{ border: '1px solid black' }}> {item.symbol}</td>
              <td style={{ border: '1px solid black' }}> {item.description}</td>
              <td style={{ border: '1px solid black' }}>
                {item.underlying_asset.name}
              </td>
              <td style={{ border: '1px solid black' }}>{item.funding_method}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

export default DataTables;
