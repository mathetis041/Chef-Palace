import {
  CuisineType,
  DietType,
  DishType,
  HealthType,
  MealType,
} from "./DataList";

function FilterTab({ option, handleVal }) {
  const Specs = [
    { name: "Cuisine", type: CuisineType },
    { name: "Diet", type: DietType },
    { name: "Dish", type: DishType },
    { name: "Health", type: HealthType },
    { name: "Meal", type: MealType },
  ];

  return (
    <>
      {Specs.map((item, index) => {
        return (
          <div key={index}>
            <h6>{item.name} Type: </h6>
            <select
              selected
              value={option.item}
              onChange={(e) => handleVal(e, item.name)}
            >
              <option value=""></option>
              {item.type.map((item, index) => {
                return (
                  <option className="text-capitalize" value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </>
  );
}

export default FilterTab;
