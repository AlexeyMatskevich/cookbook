import { combineReducers } from "redux";
import { recipesReducer } from "./reducer/recipes";
import { ingredientsReducer } from "./reducer/ingredients";

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
});