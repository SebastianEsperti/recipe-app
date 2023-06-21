import React from "react";

function RecipeList({ recipes, onDelete }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.photo} alt={recipe.name} />
              </td>
              <td>
                <div className="content_td">
                  {recipe.ingredients.split("\n").map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                  ))}
                </div>
              </td>
              <td>
                <div className="content_td">
                  {recipe.preparation.split("\n").map((step, i) => (
                    <p key={i}>{step}</p>
                  ))}
                </div>
              </td>
              <td>
                <button name="delete" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;