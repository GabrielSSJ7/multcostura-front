import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  changeName: ["name"],
  changeDescription: ["description"],
  loadCategories: ["categories"]
});
const INITIAL_STATE = {
  name: "",
  description: "",
  categories: []
};
const changeName = (state = INITIAL_STATE, action) => ({
  ...state,
  name: action.name
});

const changeDescription = (state = INITIAL_STATE, action) => ({
  ...state,
  description: action.description
});

const loadCategories = (state = INITIAL_STATE, action) => ({
  ...state,
  categories: action.categories
});
export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_NAME]: changeName,
  [Types.CHANGE_DESCRIPTION]: changeDescription,
  [Types.LOAD_CATEGORIES]: loadCategories
});
