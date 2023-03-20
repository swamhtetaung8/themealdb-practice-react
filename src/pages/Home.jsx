import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MealContext } from "../context/MealProvider";
import { AiOutlineSearch } from "react-icons/ai";
import { GiSpinningRibbons } from "react-icons/gi";
import { motion } from "framer-motion";
const Home = () => {
  const { randomMeal, setMeals, loading, getMeals } = useContext(MealContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput("");
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const { meals } = await api.json();
    setMeals(meals);
    navigate("/recipes");
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <section className=" min-h-screen w-full flex items-center justify-center lg:pt-0 md:pt-20 pt-44 pb-10 md:pb-0">
      {loading ? (
        <GiSpinningRibbons className=" animate-spin text-4xl" />
      ) : (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
          className="  space-y-16 lg:w-[60%] md:w-[80%] px-10 md:px-0">
          <form
            action=""
            className=" bg-slate-200 flex items-center justify-between px-4 mx-auto w-64  py-3 rounded-lg"
            onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search here"
              className=" outline-none bg-slate-200 text-gray-800 rounded-md"
            />
            <button>
              <AiOutlineSearch className=" text-gray-500 text-xl" />
            </button>
          </form>
          <div className="text-center space-y-3">
            <h1 className=" text-4xl text-blue-500 tracking-wider uppercase">
              What are your favourite cuisines?
            </h1>
            <p className=" uppercase font-light tracking-wide text-xl text-slate-400">
              Personalize your experience
            </p>
          </div>
          <p className=" bg-blue-400 inline-block px-3 py-1 rounded-full text-white">
            Today's special
          </p>
          <div className=" flex lg:gap-20 gap-10 items-start md:flex-row flex-col">
            <img
              src={randomMeal.strMealThumb}
              className="lg:w-[300px] md:w-[250px] rounded-md"
              alt=""
            />
            <div className="space-y-5">
              <div className=" space-y-3">
                <h2 className=" font-bold uppercase text-2xl">
                  {randomMeal.strMeal}
                </h2>
                <p className="text-black/70 text-sm">
                  {randomMeal.strCategory}
                </p>
                <p>{randomMeal?.strInstructions?.substr(0, 450)}...</p>
              </div>
              <Link to={`/detail/${randomMeal.idMeal}`} className="block">
                <button className="  px-4 py-2 rounded-md border text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white duration-300 transition-all">
                  See details
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
