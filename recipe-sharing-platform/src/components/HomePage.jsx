import { Link } from "react-router-dom";

// داخل return, عدّل div الوصفة:

<Link to={`/recipe/${recipe.id}`}>
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
    <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
      <p className="text-gray-600 text-sm">{recipe.summary}</p>
    </div>
  </div>
</Link>
