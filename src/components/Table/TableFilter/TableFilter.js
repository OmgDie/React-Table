import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTable } from '../../../redux/actions/tableActions';

const TableFilter = () => {
  const [filterText, setFilterText] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilterSubmit = () => {
    dispatch(filterTable(filterText));
  };

  return (
    <div>
      <input type="text" value={filterText} onChange={handleFilterChange} />
      <button onClick={handleFilterSubmit}>Найти</button>
    </div>
  );
};

export default TableFilter;




