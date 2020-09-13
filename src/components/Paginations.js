import React from "react";

function Paginations({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination_main my-4">
      <ul>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default Paginations;
