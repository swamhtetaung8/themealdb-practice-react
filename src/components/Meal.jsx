import React, { useContext, useEffect, useState } from "react";
import MealCard from "./MealCard";
import { motion } from "framer-motion";
import { MealContext } from "../context/MealProvider";
const Meal = () => {
  const [meals] = useContext(MealContext);
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      transition={{ duration: 1 }}
      className=" flex flex-wrap gap-5 justify-center items-center container mx-auto py-10 min-h-[90vh]">
      {meals?.length > 0 ? (
        meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
      ) : (
        <h1 className=" text-xl md:text-3xl  uppercase font-medium">
          Sorry no results are found
        </h1>
      )}
    </motion.div>
  );
};

export default Meal;
