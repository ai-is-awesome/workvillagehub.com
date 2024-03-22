import { useState } from "react";
import { set } from "zod";

const usePagination = (currentPage: number, limit: number) => {
  const [page, setPage] = useState<number>(currentPage);
  const [limit, setLimit] = useState(limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    setPage((c) => c + 1);
  };

  const handlePreviousPage = () => {
    setPage((c) => c - 1);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setLimit(newPerPage);
  };

  return {
    page,
    limit,
    handlePageChange,
    handlePerPageChange,
    handleNextPage,
    handlePreviousPage,
  };
};
