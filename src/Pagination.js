import React from "react";

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  return (
    <div>
      {goToNextPage && <button onClick={goToNextPage}>NEXT</button>}
      {goToPreviousPage && <button onClick={goToPreviousPage}>PREVIOUS</button>}
    </div>
  );
}
