import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipescontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Creaet = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipescontext);
  const { register, handleSubmit } = useForm();

  // function submitHandler(recipe) {
  //   recipe.id = nanoid();
  //   setData([...data, recipe]);
  //   toast.success("New recipe create !@");
  //   navigate("/recipes");
  // }
  function submitHandler(formData) {
    const newRecipe = {
      ...formData,
      id: nanoid(),
      ingr: formData.ingr.split(",").map((item) => item.trim()),
      inst: formData.inst.split(",").map((item) => item.trim()),
    };

    setData([...data, newRecipe]);

    toast.success("New recipe created!");
    navigate("/recipes");
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image Url"
      />
      <small className="text-red-500">This is how the error is show</small>

      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipes Title"
      />

      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />

      <textarea
        className="block border-b outline-0 p-2"
        {...register("desc")}
        type="text"
        placeholder="//start from hear"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingr")}
        type="text"
        placeholder="//write ingredient saperated by comma"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("inst")}
        type="text"
        placeholder="//write instructions saperated by comma"
      ></textarea>
      <select
        className="block border-b outline-0 p-2 z-50 text-yellow-700"
        {...register("category")}
        type="text"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="block px-4 py-2 bg-gray-900 rounded mt-4">
        Save Recipe
      </button>
    </form>
  );
};

export default Creaet;
