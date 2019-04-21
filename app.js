import loadUI from "./ui/jquery";
import { fetchRecipes} from "./actions/recipes";
import store from "./store/store"

loadUI();

store.dispatch(fetchRecipes());