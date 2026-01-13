cd F:\alx-fe-reactjs\alx-react-appimport { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore(state => state.recipes);
  const recipe = recipes.find(r => r.id.toString() === id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
