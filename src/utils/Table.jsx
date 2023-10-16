import React from "react";
import "../Styles/Table.css";

const Table = ({ data, columns }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns?.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {console.log("data:", data)}

          {data && Array.isArray(data) ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {console.log("columns:", columns)}

                {columns && Array.isArray(columns)
                  ? columns.map((column) => (
                      <td key={column.key}>{row[column.key]}</td>
                    ))
                  : null}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
