import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); 
  const [errors, setErrors] = useState({});

  // دالة التحقق
  const validate = () => {
    const validationErrors = {};
    if (!title.trim()) validationErrors.title = "Title is required";
    if (!ingredients.trim()) validationErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) validationErrors.steps = "Steps are required";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // استدعاء الدالة
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock submit
    console.log({ title, ingredients, steps });

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto p-4 shadow-md rounded-lg bg-white mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={4}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
