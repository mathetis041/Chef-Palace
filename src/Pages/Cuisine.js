import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchedCard from "../Components/search/SearchCards";
import loaderGif from "../asset/preloader.gif";

function Cuisine() {
  const preloader = useMemo(() => {
    return new Array(12);
  }, []);
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const [loading, setLoading] = useState(false);

  const getCuisine = async (name) => {
    let appID = "23b20659";

    // Fetch Data
    const data = await fetch(
      `https://api.edamam.com/search?q=salad&q=bread&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100&cuisineType=${name}&random=true`
    );

    setLoading(true); // Set Loading to True
    const recipes = await data.json(); // Get API Response Data
    setCuisine(recipes.hits);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  useEffect(() => {
    if (!loading) {
      preloader.fill({
        recipe: {
          label: "Cooking Up Ingredients",
          image: loaderGif,
          uri: "",
        },
      });

      setCuisine(preloader);
    }
  }, [loading, preloader]);

  return (
    <Container>
      <h2> {params.type} Recipes </h2>
      <SearchedCard set={cuisine} gridNumber={24} bg={loaderGif} />
    </Container>
  );
}

export default Cuisine;
