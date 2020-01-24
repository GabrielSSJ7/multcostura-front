import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loadManufacturers: ["manufacturers"]
});
const INITIAL_STATE = {
  manufacturers: []
};
const loadManufacturers = (state = INITIAL_STATE, action) => ({
  ...state,
  manufacturers: action.manufacturers
});
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_MANUFACTURERS]: loadManufacturers
});
