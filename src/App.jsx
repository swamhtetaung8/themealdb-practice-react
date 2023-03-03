import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import { MealProvider } from "./context/MealProvider";

function App() {
  return (
    <div className=" bg-gradient-to-b from-white to-gray-100">
      <MealProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MealProvider>
    </div>
  );
}

export default App;
