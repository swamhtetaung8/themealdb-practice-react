import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MealContext } from "../context/MealProvider";
const Navbar = () => {
  const [meals, setMeals, getMeals] = useContext(MealContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput("");
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const { meals } = await api.json();
    console.log(meals);
    setMeals(meals);
    navigate("/");
  };
  return (
    <motion.nav
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=" px-4">
      <ul className=" flex items-center justify-between">
        <Link to="/" onClick={getMeals}>
          <li>
            <img
              src="https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg"
              width={100}
              alt=""
            />
          </li>
        </Link>
        <li>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search here"
              className=" outline-none bg-slate-700 text-white rounded-md p-2"
            />
          </form>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
