import React from "react";

const Pagination = (props) => {
  let pageDisabled = props.currentPage === 1 ? true : false;
  return (
    <div className="pagination-button">
      <button
        className={pageDisabled ? "prev dispable" : "prev"}
        disabled={pageDisabled}
        onClick={() => props.newPage("previous")}
      >
        Prev
      </button>
      <div>PAGE {props.currentPage}</div>
      <button className="next" onClick={() => props.newPage("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
