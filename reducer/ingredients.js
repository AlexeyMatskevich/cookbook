import { ADD_INGREDIENT } from "../constants/action-types";

export const ingredientsReducer = ( ingredients = [], action ) => {
  if (action.type === ADD_INGREDIENT) {
    const newIngredient = {
      name: action.name,
      recipe: action.recipe,
      quantity: action.quantity
    };
    return ingredients.concat(newIngredient);
  }

  return ingredients;
};