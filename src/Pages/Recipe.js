import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import {
  Aside,
  ItemsRules,
  Mains,
  NutContent,
  NutDetail,
  Nutrients,
  RecipeContainer,
  RecipeShare,
  Series,
  Stats,
} from "../Styles/RecipeStyle";
import RecipeSide from "../Components/recipe/RecipeSide";

function Recipe() {
  const [details, setDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [ing, setIngredients] = useState([]);
  const [nut, setNutrients] = useState([]);
  let params = useParams();
  let recipeLocation = useLocation();

  useEffect(() => {
    getRecipe(params.name);
  }, [params]);

  const getRecipe = async (name) => {
    let appID = "23b20659";
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2/${name}?type=public&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const recipe = await data.json();
    setDetails(recipe.recipe);

    //Get Recipe Ingredients
    const Ingredients = recipe.recipe.ingredientLines.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    setIngredients(Ingredients);

    //Get Recipe Nutrients
    const Nutrients = recipe.recipe.digest.map((item) => {
      return item;
    });
    setNutrients(Nutrients);

    // Similar Recipes of Certain Recipe
    const similarData = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe.recipe.dishType}&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&dishtype=${recipe.recipe.dishType}&random=true`
    );

    const similarRecipes = await similarData.json();
    const randomPick = similarRecipes.hits.sort(() => Math.random() - 0.5);
    const selected = randomPick.slice(0, 4);

    setSimilar(selected);
  };

  const convertTime = (time) => {
    var Hours =
      Math.trunc(time / 60) >= 2
        ? `${Math.trunc(time / 60)} Hours`
        : Math.trunc(time / 60) === 1
        ? `${Math.trunc(time / 60)} Hour`
        : "";
    var Min =
      Math.trunc(time % 60) >= 1 ? `${Math.trunc(time % 60)} Minutes` : "";

    return `${Hours} ${Min}`;
  };

  return (
    <Container>
      <Link to={"/searched/" + details.label} className="text-decoration-none">
        <h2 className="text-uppercase text-wrap">
          Recipe/
          {Object.values(`${details.dishType}`).map((item) => item)}
        </h2>
      </Link>
      <RecipeContainer>
        <Mains>
          <h1>{details.label}</h1>
          <Stats>
            <img src={details.image} alt={details.label} />
            <div className="description">
              <h3>Description</h3>
              <p>
                {details.label} is a{" "}
                {Object.values(`${details.dietLabels}`).map((item) => item)}{" "}
                <span className="text-capitalize">{details.cuisineType}</span>{" "}
                dish and can be made for those who needs or are{" "}
                {Object.values(`${details.healthLabels}`).map((item) => item)}{" "}
                {details.caution === {}
                  ? "."
                  : `and be cautioned of ${details.cautions}`}
                {/* Recipe Stats */}
                <div className="recipe-timing">
                  <b>
                    Ready In:{" "}
                    <span className="text-nowrap">
                      {convertTime(details.totalTime)}
                    </span>
                  </b>
                  <b>
                    Meal Type:{" "}
                    <span className="text-nowrap">{details.mealType}</span>
                  </b>
                  <b>Serves: {details.yield}</b>
                </div>
                <RecipeShare>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://michaelajayi150.github.io/Chef-Palace/${recipeLocation.pathname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsIcons.BsFacebook size="1.4rem" />
                  </a>
                  <a
                    href={`whatsapp://send?text=Check%20out%20how%20to%20make%20${details.label}`}
                    data-action="share/whatsapp/share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsIcons.BsWhatsapp size="1.4rem" />
                  </a>
                  <a
                    href={`https://twitter.com/share?url=https://michaelajayi150.github.io/Chef-Palace/${recipeLocation.pathname}&text=Check%20out%20how%20to%20make%20${details.label}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsIcons.BsTwitter size="1.4rem" />
                  </a>
                </RecipeShare>
              </p>
            </div>
          </Stats>

          {/* Ingredients, Nutrients and Instruction Series */}
          <Series>
            <ItemsRules>
              <h3>{ing.length} Ingredients</h3>
              {ing}
              <h3>Instructions</h3>
              <p>Click on the button below to see recipe direction</p>
              <button>
                <a href={details.url} target="_blank" rel="noreferrer">
                  Check Direction
                </a>
              </button>
              <p>
                Credit to: <a href={details.url}>{details.source}</a>
              </p>
            </ItemsRules>
            <Nutrients>
              <h3>Nutrition</h3>
              <NutDetail>
                <b className="text-uppercase">
                  {Math.floor(details.calories)} Calories per servings
                </b>
              </NutDetail>
              <div>
                {nut.map((nutrient, index) => {
                  return (
                    <NutContent key={index}>
                      <p>
                        {nutrient.label}
                        <span>
                          <span>
                            {Math.trunc(nutrient.total / 4)}
                            {nutrient.unit}
                          </span>
                          <span>{Math.trunc(nutrient.daily / 4)}%</span>
                        </span>
                      </p>
                      <div>
                        {nutrient.sub
                          ? nutrient.sub.map((nutrientSub, index) => {
                              return (
                                <p key={index}>
                                  {nutrientSub.label}
                                  <span className="nutrient-params">
                                    <span>
                                      {Math.trunc(nutrientSub.total / 4)}
                                      {nutrientSub.unit}
                                    </span>
                                    <span>
                                      {Math.trunc(nutrientSub.daily / 4)}%
                                    </span>
                                  </span>
                                </p>
                              );
                            })
                          : null}
                      </div>
                    </NutContent>
                  );
                })}
              </div>
            </Nutrients>
          </Series>
        </Mains>
        <Aside>
          <RecipeSide similar={similar} />
        </Aside>
      </RecipeContainer>
    </Container>
  );
}

export default Recipe;
