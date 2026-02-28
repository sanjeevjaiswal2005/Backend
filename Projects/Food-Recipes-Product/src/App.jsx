import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className=" py-10 px-[20%] w-screen min-h-screen text-white font-thin bg-gray-700">
        <Navbar />
        <MainRoutes />
      </div>
    </>
  );
};

export default App;
