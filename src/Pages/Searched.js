import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FilterTab from "../Components/search/FilterTab";
import { FilterBtn, FilterContainer } from "../Styles/SearchedStyle";
import errorImg from "../asset/error.png";
import SearchedCard from "../Components/search/SearchCards";
import loaderGif from "../asset/preloader.gif";

function AllCategory() {
  const preloader = useMemo(() => {
    return new Array(12);
  }, []);

  const [category, setCategory] = useState([]);

  const [errorState, setErrorState] = useState(false);
  // Hold Rendered Error Message
  const [errorMessage, setError] = useState();

  const [loading, setLoading] = useState(false);

  let params = useParams();
  let appId = "23b20659";

  const [option, setOption] = useState({
    Health: "",
    Diet: "",
    Dish: "",
    Meal: "",
    Cuisine: "",
  });

  const handleVal = (e, auth) => {
    setOption((prev) => ({ ...prev, [auth]: e.target.value }));
  };

  // Get Search Request
  useEffect(() => {
    setCategory([]);
    const Search = async (name) => {
      try {
        // Fetch Data
        const data = await fetch(
          `https://api.edamam.com/search?q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100`
        );

        // If Bad Response, Throw Error
        if (data.status >= 201) {
          setErrorState(true);
          const errorMessage = await data.text();
          throw new Error(errorMessage);
        } else {
          setLoading(true); // Set Loading to True
          const recipes = await data.json(); // Get API Response Data
          setCategory(recipes.hits); // Set Category
          setErrorState(false);
        }
      } catch (err) {
        // Get the String Format of the Error Message
        var str = "";
        const messagePrompt = Object.values(`${err}`).map((item) => {
          str += `${item}`;
          return str;
        });
        // Split it into parts
        const message = messagePrompt[messagePrompt.length - 1].split(":");
        // Render the main error level any way you want
        setError(message[2]);
      }
    };

    Search(params.search);
  }, [params.search, appId]);

  useEffect(() => {
    if (!loading) {
      preloader.fill({
        recipe: {
          label: "Cooking Up Ingredients",
          image: loaderGif,
          uri: "",
        },
      });

      setCategory(preloader);
    }
  }, [loading, preloader]);

  const handleFilter = () => {
    setLoading(false);
    filterSearch(params.search, option);
  };

  // Get Filter Request
  const filterSearch = async (name, option) => {
    try {
      // Get the search parameters
      const parameters = `${
        option.Health !== "" ? `&health=${option.Health}` : ""
      }${option.Dish !== "" ? `&dishType=${option.Dish}` : ""}${
        option.Cuisine !== "" ? `&cuisineType=${option.Cuisine}` : ""
      }${option.Diet !== "" ? `&diet=${option.Diet}` : ""}
      ${option.Meal !== "" ? `&mealType=${option.Meal}` : ""}`;

      // Fetch Data
      const data = await fetch(
        `https://api.edamam.com/search?q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}${parameters}&from=0&to=100`
      );

      // If Bad Response, Throw Error
      if (data.status >= 201) {
        setErrorState(true);
        const errorMessage = await data.text();
        throw new Error(errorMessage);
      } else {
        setLoading(true); // Set Loading to True
        const recipes = await data.json(); // Get API Response Data
        setCategory(recipes.hits); // Set Category
        setErrorState(false);
      }
    } catch (err) {
      // Get the String Format of the Error Message
      var str = "";
      const messagePrompt = Object.values(`${err}`).map((item) => {
        str += `${item}`;
        return str;
      });
      // Split it into parts
      const message = messagePrompt[messagePrompt.length - 1].split(":");
      // Render the main error level any way you want
      setError(message[2]);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-capitalize">{params.search} Recipes</h1>

        {/* Filter Section */}
        <div>
          <h4>Filter by:</h4>
          <FilterContainer>
            <FilterTab option={option} handleVal={handleVal} />
          </FilterContainer>
          <FilterBtn onClick={handleFilter}>
            Filter By Your Specification
          </FilterBtn>
        </div>

        {category && !errorState ? null : (
          <>
            <img src={errorImg} width="300px" alt="Error" />
            <div>
              <h3>Oops!</h3>
              <h4>No Matches</h4>
              <p>
                This Recipes does not meet your selected filter: "{errorMessage}
              </p>
            </div>
          </>
        )}
        <SearchedCard set={category} gridNumber={12} bg={loaderGif} />
      </Container>
    </>
  );
}

export default AllCategory;
