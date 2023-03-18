import { Flex } from "@chakra-ui/react";
import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ apiInfo, visible, load, currentPage }) {
  const { total, limit } = apiInfo ?? {};

  if (visible) {
    return (
      <Flex py={10} bg="white">
        <ReactPaginate
          pageCount={total / limit}
          pageRange={4}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={load}
          forcePage={currentPage / limit}
          containerClassName={"pagination_container"}
          previousLinkClassName={"pagination_page"}
          breakClassName={"pagination_page"}
          nextLinkClassName={"pagination_page"}
          pageClassName={"pagination_page"}
          disabledClassNae={"pagination_disabled"}
          activeClassName={"pagination_active"}
        />
      </Flex>
    );
  }
}
