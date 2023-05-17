import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigateToPage } from '../../../redux/actions/tableActions';

const TablePagination = () => {
  const currentPage = useSelector((state) => state.table.currentPage);
  const totalPages = useSelector((state) => state.table.totalPages);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(navigateToPage(page));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default TablePagination;




