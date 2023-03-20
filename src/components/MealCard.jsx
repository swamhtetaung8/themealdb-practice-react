import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const MealCard = ({ meal }) => {
  return (
    <div className=" w-[250px] md:w-[230px] border rounded-md p-5 shadow-xl hover:rotate-3 transition-all duration-100 relative group ">
      <h2 className=" truncate">{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        className=" h-36 my-5 rounded-lg group-hover:opacity-60 w-full object-cover"
        alt=""
      />
      <Link
        to={`/detail/${meal.idMeal}`}
        className="border border-white/80 group-hover:opacity-100 opacity-0  bg-black transition-all duration-[0.5s] rounded-full w-10 h-10 flex items-center justify-center absolute top-[50%] left-[40%] cursor-pointer">
        <BiSearch size={20} className="" color="white" />
      </Link>
    </div>
  );
};

export default MealCard;
