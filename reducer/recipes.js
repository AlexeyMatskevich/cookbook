import { ADD_RECIPE } from "../constants/action-types";

export const recipesReducer = ( recipes = [], action ) => {
  if (action.type === ADD_RECIPE) {
    return recipes.concat({ name: action.name });
  }

  return recipes;
};