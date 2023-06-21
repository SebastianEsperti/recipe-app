import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new recipe object
    const newRecipe = {
      name: recipe.name,
      cuisine: recipe.cuisine,
      photo: recipe.photo,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation
    };

    // Call the onCreate function to add the new recipe
    onCreate(newRecipe);

    // Clear the form contents
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="cuisine">Cuisine:</label>
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="photo">Photo URL:</label>
            </td>
            <td>
              <input
                type="text"
                id="photo"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="ingredients">Ingredients:</label>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="preparation">Preparation:</label>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                required
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;