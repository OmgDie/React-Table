import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSmallDataAsync, fetchLargeDataAsync } from '../../redux/reducers/tableReducer';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TablePagination from './TablePagination/TablePagination';
import TableFilter from './TableFilter/TableFilter'; 

const Table = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.table);

  useEffect(() => {
    dispatch(fetchSmallDataAsync()); // Загрузка малого объема данных
    dispatch(fetchLargeDataAsync()); // Загрузка большого объема данных
  }, [dispatch]);

  /*if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }*/

  // Загрузка данных большого объема
  const handleLoadLargeData = () => {
    console.log('Fetching large data...');
    dispatch(fetchLargeDataAsync());
  };

  // Загрузка данных малого объема
  const handleLoadSmallData = () => {
    console.log('Fetching small data...');
    dispatch(fetchSmallDataAsync());
  };

  return (
    <div>
      <TableFilter />
      <table>
        <TableHeader />
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">Загрузка данных...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan="5">Нет данных</td>
            </tr>
          ) : (
            data.map((row) => <TableRow key={row.id} row={row} />)
          )}
        </tbody>
      </table>
      <button onClick={handleLoadLargeData}>Загрузить большой объем данных</button>
      <button onClick={handleLoadSmallData}>Загрузить малый объем данных</button>
      
      {/* Отображение пагинации */}
      <TablePagination />
    </div>
  );
};

export default Table;
