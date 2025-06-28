function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        {pageNumber.map((number, index) => {
          return (
            <li key={index} className="page-item">
              <b onClick={() => paginate(number)} className="page-link pointer">
                {number}
              </b>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
