import peopleReducer from "Components/CharacterInput/redux/reducer";
import movieReducer from "Components/MovieList/redux/reducer";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    peopleReducer,
    movieReducer,
  });

export default createRootReducer;
