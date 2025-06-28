export const filterSearch = async (name, option) => {
  try {
    const parameters = `${
      option.Health !== "" ? `&health=${option.Health}` : ""
    }${option.Dish !== "" ? `&dishType=${option.Dish}` : ""}${
      option.Cuisine !== "" ? `&cuisineType=${option.Cuisine}` : ""
    }${option.Diet !== "" ? `&diet=${option.Diet}` : ""}
    ${option.Meal !== "" ? `&mealType=${option.Meal}` : ""}`;
    console.log("me");

    const data = await fetch(
      `https://api.edamam.com/search?q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}${parameters}&from=0&to=100`
    );

    if (data.status >= 201) {
      setErrorState(true);
      const errorMessage = await data.text();
      throw new Error(errorMessage);
    } else {
      setLoading(true);
      const recipes = await data.json();
      setCategory(recipes.hits);
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
