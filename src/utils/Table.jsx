import React from 'react';
import "../Styles/Table.css";

const Table = ({ data }) => {

    // const tableData = [
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20000" },
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    //     { column1: '+2348176855712', column2: '200', column3: 'Music', column4: "20,000" },
    
        
    //   ];
  
  return (
    <table>
      <thead>
        <tr>
          <th>MSIDN</th>
          <th>Price point</th>
          <th>Category</th>
          <th>Winning</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="table-row" >
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>{row.column4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
