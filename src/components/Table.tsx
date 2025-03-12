import React from 'react';

  interface Data {
    avatar: string
    name: string,
    bio: string,
    twitter: string,
    githubLink: string
  }

  interface Column {
    header: string,
    accessor: string
  }

  const data: Data[] = [
    {avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'John Doe', bio: "This is a bio for a developer", twitter: 'Developer', githubLink: "https://github.com/" },
    {avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'Jane Smith', bio: "This is a bio for a developer", twitter: 'Designer', githubLink: "https://github.com/" },
    {avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'Alice Brown', bio: "This is a bio for a developer", twitter: 'Project Manager', githubLink: "https://github.com/" },
    {avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'Alice Brown', bio: "This is a bio for a developer", twitter: 'Project Manager', githubLink: "https://github.com/" },
    {avatar: 'https://i.imgur.com/XgbZdeA.jpeg', name: 'Alice Brown', bio: "This is a bio for a developer", twitter: 'Project Manager', githubLink: "https://github.com/" },
  ];

  const columns: Column[] =  [
    { header: 'Avatar', accessor: 'avatar' },
    { header: 'Name', accessor: 'name' },
    { header: 'Bio', accessor: 'age' },
    { header: 'Twitter', accessor: 'occupation'},
    { header: 'GithubLink', accessor: 'balls'},
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
        {data.map((row: Data, rowIndex) => (
          <tr key={rowIndex}>
            <td
              style={{
                border: '1px solid #ccc',
                padding: '8px',
              }}>
            <img
              className="avatar"
              src={row.avatar}
              style={{ width: '100px', height: '100px', borderRadius: '100%' }}
            />
            </td>
            <td
              style={{
                border: '1px solid #ccc',
                padding: '8px',
              }}>
              { row.name }
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                }}>
              { row.bio }
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                }}>
              { row.twitter }
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  color: 'skyblue',
                  textDecoration: 'underline'
                }}>
                <a href={row.githubLink} className="href" target='_blank'>{ row.githubLink }</a>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Table;
