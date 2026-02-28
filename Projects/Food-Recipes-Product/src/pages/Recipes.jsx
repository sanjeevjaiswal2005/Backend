import React, { useContext } from "react";
import { recipescontext } from "../context/RecipeContext";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipescontext);
  console.log(data);

  // const reciperender = data?.map((recipe) => (
  //   <div key={recipe.id}>
  //     <img src={recipe.image} alt="" />
  //     <h1>{recipe.title}</h1>
  //   </div>
  //   // <RecipeCard />
  // ));
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽 Our Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
