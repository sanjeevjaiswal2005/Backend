import { NavLink } from "react-router-dom";
const RecipeCard = ({ recipe }) => {
  return (
    <NavLink to={`/recipes/details/${recipe.id}`}>
      <div
        key={recipe.id}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-56 object-cover"
          />
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {recipe.category}
          </span>
        </div>

        <div className="p-5 space-y-4">
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800">
            {recipe.title}
          </h2>

          {/* Chef */}
          <p className="text-sm text-gray-500">
            👨‍🍳 Chef:{" "}
            <span className="font-medium text-gray-700">{recipe.chfe}</span>
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3">{recipe.desc}</p>

          {/* Ingredients */}
          <div>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              Ingredients:
            </h3>
            <p className="text-sm text-gray-600">{recipe.ingr.join(", ")}</p>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              Instructions:
            </h3>
            <p className="text-sm text-gray-600">
              {recipe.inst.slice(0, 2).join(", ")}...
            </p>
          </div>

          {/* Button */}
          <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition">
            View Recipe
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default RecipeCard;
