import { handleActions } from "redux-actions";
import { types } from "./actions";

const actionHandlers = {
  [types.GET_ALL_PEOPLE]: (state) => ({
    ...state,
    loader: true,
  }),
  [types.GET_ALL_PEOPLE_SUCCESS]: (state, { payload }) => ({
    ...state,
    loader: false,
    people: payload,
  }),
  [types.GET_ALL_PEOPLE_FAILED]: (state) => ({
    ...state,
    loader: false,
    people: null,
  }),
  [types.SET_SELECTED_CHARACTER]: (state, { payload }) => ({
    ...state,
    loader: false,
    selected_character: payload,
  }),
};

export default handleActions(actionHandlers, {
  loader: false,
  people: null,
  selected_character: null,
});
