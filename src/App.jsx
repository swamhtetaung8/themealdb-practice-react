import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import { MealProvider } from "./context/MealProvider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" bg-gradient-to-b from-white to-gray-100">
      <MealProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Meal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MealProvider>
    </div>
  );
}

export default App;
