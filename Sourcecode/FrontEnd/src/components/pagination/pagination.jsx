import React from 'react'
import "./pagination.css"

function Pagination({boardsPerPage, totalBoards, paginate}) {

    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBoards / boardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {totalBoards > 4 ? <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul> : ""}
      
    </nav>
  )
}

export default Pagination