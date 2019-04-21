const recipesReducer = ( recipes, action ) => {
  if (action.type === 'ADD_RECIPE') {
    return recipes.concat({ name: action.name });
  }

  return recipes;
};

const ingredientsReducer = ( ingredients, action ) => {
  if (action.type === 'ADD_INGREDIENT') {
    const newIngredient = {
      name: action.name,
      recipe: action.recipe,
      quantity: action.quantity
    };
    return ingredients.concat(newIngredient);
  }

  return ingredients;
};

export const rootReducer = ( state, action ) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, state),
    ingredients: ingredientsReducer(state.ingredients, state),
  });
};