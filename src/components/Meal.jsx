import React, { useContext, useEffect, useState } from "react";
import MealCard from "./MealCard";
import { motion } from "framer-motion";
import { MealContext } from "../context/MealProvider";
const Meal = () => {
  const { meals } = useContext(MealContext);
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      transition={{ duration: 1 }}
      className=" grid lg:grid-cols-6 grid-cols-1 md:grid-cols-3 gap-10 justify-items-center place-items-start container mx-auto py-10 min-h-screen pt-32">
      {meals?.length > 0 ? (
        meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
      ) : (
        <h1 className=" text-xl md:text-3xl absolute top-[50%]  uppercase font-medium">
          Sorry no results are found
        </h1>
      )}
    </motion.div>
  );
};

export default Meal;
