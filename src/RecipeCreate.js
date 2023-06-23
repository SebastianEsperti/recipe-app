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
    const newRecipe = { ...recipe };

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
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={recipe.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Photo URL"
                value={recipe.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                value={recipe.preparation}
                onChange={handleChange}
                required
              ></textarea>
            </td>
            <td style={{ textAlign: "center" }}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;