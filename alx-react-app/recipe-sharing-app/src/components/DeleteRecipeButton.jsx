<<<<<<< HEAD
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete} style={{ marginTop: "10px" }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
=======
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete} style={{ marginTop: "10px" }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
>>>>>>> 5085a1e8a113377fd47bfb42993feb94cf717564
