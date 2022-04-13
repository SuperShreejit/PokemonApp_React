import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {
        goToPrevPage &&
        <button type='button' onClick={goToPrevPage}>Previous</button>
      }
      {
        goToNextPage &&
        <button type='button' onClick={goToNextPage}>Next</button>
      }
    </div>
  )
}
