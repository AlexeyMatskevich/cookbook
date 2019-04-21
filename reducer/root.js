import { recipesReducer } from "./recipes";
import { ingredientsReducer } from "./ingredients";
import { combineReducers } from "redux";

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
});