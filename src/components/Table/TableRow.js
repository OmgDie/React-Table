import React from 'react';

const TableRow = ({ row }) => {
  const { id, firstName, lastName, email, phone } = row;

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableRow;

