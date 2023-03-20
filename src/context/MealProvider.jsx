import React, { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const getMeals = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    // console.log(meals);
    setMeals(meals);
    setLoading(false);
  };

  const getRandomMeal = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const { meals } = await api.json();
    setRandomMeal(meals[0]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMeals();
    getRandomMeal();
  }, []);
  const data = { meals, setMeals, getMeals, randomMeal, loading };
  return <MealContext.Provider value={data}>{children}</MealContext.Provider>;
};
