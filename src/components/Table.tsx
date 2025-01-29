import React from 'react';

  const data = [
    { avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'John Doe', age: 28, occupation: 'Developer' },
    { avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'Alice Brown', age: 42, occupation: 'Project Manager' },
  ];
 
  const columns = [
    { header: 'Avatar', accessor: 'avatar' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Occupation', accessor: 'occupation' },
  ];

// function Table({ data, columns }) {
  function Table() {
  return (
    <>
    <h1>
      Github User Results
    </h1>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor}
              style={{
                border: '1px solid #ccc',
                padding: '8px',
                textAlign: 'left',
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td
                key={col.accessor}
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                }}
              >
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Table;
