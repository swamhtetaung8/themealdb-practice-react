import React, { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const getMeals = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    // console.log(meals);
    setMeals(meals);
  };

  useEffect(() => {
    getMeals();
  }, []);
  const data = [meals, setMeals, getMeals];
  return <MealContext.Provider value={data}>{children}</MealContext.Provider>;
};
