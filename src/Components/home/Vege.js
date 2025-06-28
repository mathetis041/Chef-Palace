import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, Gradient } from "../../Styles/Styling";
// import axios from "axios";

function Vege() {
  const [Veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("Veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      let appID = "23b20659";

      const api = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=salad&q=bread&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&health=vegan&random=true`
      );
      const data = await api.json();

      localStorage.setItem("Veggie", JSON.stringify(data.hits));
      setVeggie(data.hits);
    }
  };

  return (
    <Container>
      <h2> Veggie Recipes </h2>

      {/* Slide Container */}
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            998: {
              perPage: 3,
            },
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
          gap: "20px",
        }}
      >
        {Veggie.map((item, index) => {
          return (
            <SplideSlide key={index} className="mt-3">
              <Card>
                <Link
                  to={
                    "/recipe/" +
                    item.recipe.uri.substr(item.recipe.uri.length - 32)
                  }
                >
                  <img src={item.recipe.image} alt={item.recipe.label} />
                  <p>{item.recipe.label}</p>
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}

export default Vege;
