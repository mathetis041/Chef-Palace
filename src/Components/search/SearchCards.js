import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { SearchedGrid } from "../../Styles/SearchedStyle";
import { Card, Gradient } from "../../Styles/Styling";

function SearchedCard({ set, gridNumber, bg }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(gridNumber);

  // Every thing Pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };
  const currentCards = set.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      <SearchedGrid>
        {currentCards.map((item, index) => {
          return (
            <Card key={index}>
              <Link
                to={
                  "/recipe/" +
                  item.recipe.uri.substr(item.recipe.uri.length - 32)
                }
              >
                <img src={bg} alt={item.recipe.label} />
                <img src={item.recipe.image} alt={item.recipe.label} />
                <p>{item.recipe.label}</p>
                <Gradient />
              </Link>
            </Card>
          );
        })}
      </SearchedGrid>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={set.length}
        paginate={paginate}
      />
    </>
  );
}

export default SearchedCard;
