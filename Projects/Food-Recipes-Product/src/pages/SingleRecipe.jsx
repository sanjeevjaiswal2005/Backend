import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { recipescontext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { id } = useParams();
  const { data = [] } = useContext(recipescontext);

  const recipe = data.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600">
          Recipe Not Found ❌
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-80 object-cover"
          />
          <span className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm">
            {recipe.category}
          </span>
        </div>

        <div className="p-8 space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>

          {/* Chef */}
          <p className="text-gray-600 text-lg">
            👨‍🍳 Chef:{" "}
            <span className="font-semibold text-gray-800">{recipe.chfe}</span>
          </p>

          {/* Description */}
          <p className="text-gray-700">{recipe.desc}</p>

          {/* Ingredients */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Ingredients
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {recipe.ingr.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Instructions
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {recipe.inst.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Back Button */}
          <Link
            to="/recipes"
            className="inline-block mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
