import { createAction } from "redux-actions";

// actions types
const GET_ALL_PEOPLE = "GET_ALL_PEOPLE";
const GET_ALL_PEOPLE_SUCCESS = "GET_ALL_PEOPLE_SUCCESS";
const GET_ALL_PEOPLE_FAILED = "GET_ALL_PEOPLE_FAILED";

const SET_SELECTED_CHARACTER = "SET_SELECTED_CHARACTER";

// actions methods

const getAllPeople = createAction(GET_ALL_PEOPLE);
const getAllPeopleSuccess = createAction(GET_ALL_PEOPLE_SUCCESS);
const getAllPeopleFailed = createAction(GET_ALL_PEOPLE_FAILED);

const setSelectedCharacter = createAction(SET_SELECTED_CHARACTER);

export const actions = {
  getAllPeople,
  getAllPeopleSuccess,
  getAllPeopleFailed,
  setSelectedCharacter,
};

export const types = {
  GET_ALL_PEOPLE,
  GET_ALL_PEOPLE_SUCCESS,
  GET_ALL_PEOPLE_FAILED,
  SET_SELECTED_CHARACTER,
};
