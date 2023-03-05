import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { VscLoading } from "react-icons/vsc";
const Detail = () => {
  const param = useParams();
  //   console.log(param.id);
  const [twoBtn, setTwoBtn] = useState("instructions");

  const [singleMeal, setSingleMeal] = useState({});
  const [instruction, setInstruction] = useState([]);
  const [detailLoad, setDetailLoad] = useState(false);

  const getDetail = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`
    );
    const data = await api.json();
    setSingleMeal(data.meals[0]);
    setDetailLoad(false);
  };
  //   console.log(singleMeal);

  useEffect(() => {
    setDetailLoad(true);
    getDetail();
  }, [param?.id]);

  useEffect(() => {
    ingredientCollector();
  }, [twoBtn]);

  const ingredientCollector = () => {
    const dummyIngredient = Object.keys(singleMeal).filter((key) =>
      key.includes("strIngredient")
    );

    const dummy2 = [];

    dummyIngredient.map((indi) => {
      if (
        singleMeal[indi] != null &&
        singleMeal[indi] != undefined &&
        singleMeal[indi] != ""
      ) {
        dummy2.push(singleMeal[indi]);
      }
    });
    setInstruction(dummy2);
  };
  // console.log(instruction);

  if (!detailLoad) {
    return (
      <div className=" flex flex-col-reverse lg:flex-row-reverse container mx-auto gap-10 py-10 md:min-h-[90vh] items-start">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className=" lg:flex-1 lg:mx-0 px-10">
          <div className=" flex gap-3 items-center">
            <button
              className={`${
                twoBtn === "instructions"
                  ? "border-2 text-white bg-slate-800 p-2 rounded-lg hover:scale-105 transition-all duration-100"
                  : "border-2 text-slate-800 bg-white p-2 rounded-lg hover:scale-105 transition-all duration-100"
              }`}
              onClick={() => setTwoBtn("instructions")}>
              Instructions
            </button>
            <button
              className={`${
                twoBtn === "instructions"
                  ? "border-2 text-slate-800 bg-white p-2 rounded-lg hover:scale-105 transition-all duration-100"
                  : "border-2 text-white bg-slate-800 p-2 rounded-lg hover:scale-105 transition-all duration-100"
              }`}
              onClick={() => setTwoBtn("ingredients")}>
              Ingredients
            </button>
          </div>
          <h1 className=" text-2xl font-bold my-3 tracking-wide">
            {singleMeal.strMeal}
          </h1>
          <p className=" text-black/70 my-3">Nation : {singleMeal.strArea}</p>
          <p className=" text-black/70 my-3">
            Category: {singleMeal.strCategory}
          </p>
          {twoBtn === "instructions" ? (
            <motion.div>
              <p className="text-2xl text-blue-800 underline">Instructions</p>
              <p className=" text-lg my-3 tracking-wide leading-7">
                {singleMeal.strInstructions}
              </p>
              <a
                href={singleMeal.strYoutube}
                className=" text-red-500"
                target={"_blank"}>
                <BsYoutube
                  size={30}
                  color="red"
                  className=" inline-block m-3"
                />
                Watch on Youtube
              </a>
            </motion.div>
          ) : (
            <motion.div>
              <h1 className=" text-2xl text-blue-800 underline">Ingredients</h1>
              <ul className=" pl-5 my-5">
                {instruction?.map((indi, index) => (
                  <li key={index} className=" list-decimal">
                    {indi}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
        <motion.img
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          src={singleMeal.strMealThumb}
          className=" w-[400px] mx-auto lg:mx-0 "
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <VscLoading className=" animate-spin text-6xl" />
      </div>
    );
  }
};

export default Detail;
