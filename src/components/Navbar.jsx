import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MealContext } from "../context/MealProvider";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <motion.nav
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=" py-4 px-10 fixed w-full bg-blue-200 shadow-sm z-50">
      <ul className=" flex items-center justify-between">
        <Link to="/">
          <li>
            <img
              src="https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg"
              className=" md:w-20 md:h-20 w-16 h-16 rounded-full"
              alt=""
            />
          </li>
        </Link>
        <li className="hidden md:block">
          <div className=" flex gap-20 text-blue-900 uppercase font-medium tracking-wide">
            <Link to="/" className=" hover:text-blue-500">
              Home
            </Link>
            <Link to="/recipes" className=" hover:text-blue-500">
              Recipes
            </Link>
            <Link to="/about" className=" hover:text-blue-500">
              About
            </Link>
            <Link to="/contact" className=" hover:text-blue-500">
              Contact
            </Link>
          </div>
        </li>
        {menu ? (
          <VscClose
            size={25}
            className="block md:hidden relative z-30 cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <CiMenuFries
            size={25}
            className="block md:hidden relative z-30 cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
        )}
        <div
          className={`flex flex-col text-blue-900  gap-20 h-screen absolute top-0 bg-blue-200 w-full z-20
      justify-center items-center ease-in md:hidden transition-all duration-[0.3s] ${
        menu ? "right-0" : "right-[-100vw]"
      }`}>
          <Link
            to="/"
            className=" hover:text-blue-500"
            onClick={() => setMenu(!menu)}>
            Home
          </Link>
          <Link
            to="/recipes"
            className=" hover:text-blue-500"
            onClick={() => setMenu(!menu)}>
            Recipes
          </Link>
          <Link
            to="/about"
            className=" hover:text-blue-500"
            onClick={() => setMenu(!menu)}>
            About
          </Link>
          <Link
            to="/contact"
            className=" hover:text-blue-500"
            onClick={() => setMenu(!menu)}>
            Contact
          </Link>
        </div>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
