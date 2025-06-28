import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import { SideCard } from "../../Styles/RecipeStyle";

function RecipeSide({ similar }) {
  return (
    <>
      <h4>ALSO SEE:</h4>
      <div className="d-none d-lg-block">
        {similar.map((item, index) => {
          return (
            <SideCard key={index}>
              <Link
                to={
                  "/recipe/" +
                  item.recipe.uri.substr(item.recipe.uri.length - 32)
                }
              >
                <img src={item.recipe.image} alt={item.recipe.label} />
                <p>{item.recipe.label}</p>
                <div className="recipe-class">
                  <b className="text-nowrap">
                    {Math.floor(item.recipe.calories)} Calories
                  </b>
                  <b className="text-nowrap">
                    {item.recipe.ingredients.length} Ingredients
                  </b>
                </div>
                <div className="recipe-class">
                  <b className="text-nowrap">{item.recipe.yield} Servings</b>
                  <b className="text-nowrap">{item.recipe.totalTime} mins</b>
                </div>
              </Link>
            </SideCard>
          );
        })}
      </div>

      <Splide
        options={{
          perPage: 2,
          breakpoints: {
            768: {
              perPage: 2,
            },
            546: {
              perPage: 1,
            },
          },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: ".5rem",
        }}
        className="d-block d-lg-none"
      >
        {similar.map((item, index) => {
          return (
            <SplideSlide key={index} className="px-3">
              <SideCard>
                <Link
                  to={
                    "/recipe/" +
                    item.recipe.uri.substr(item.recipe.uri.length - 32)
                  }
                >
                  <img src={item.recipe.image} alt={item.recipe.label} />
                  <p>{item.recipe.label}</p>
                  <div className="recipe-class">
                    <b className="text-nowrap">
                      {Math.floor(item.recipe.calories)} Calories
                    </b>
                    <b className="text-nowrap">
                      {item.recipe.ingredients.length} Ingredients
                    </b>
                  </div>
                  <div className="recipe-class">
                    <b className="text-nowrap">{item.recipe.yield} Servings</b>
                    <b className="text-nowrap">{item.recipe.totalTime} mins</b>
                  </div>
                </Link>
              </SideCard>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

export default RecipeSide;
