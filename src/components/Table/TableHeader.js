import React from 'react';

const TableHeader = () => {
  const headers = ['id', 'firstName', 'lastName', 'email', 'phone'];

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
