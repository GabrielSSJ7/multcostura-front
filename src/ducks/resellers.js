import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loadResellers: ["resellers"]
});
const INITIAL_STATE = {
  resellers: []
};
const loadResellers = (state = INITIAL_STATE, action) => ({
  ...state,
  resellers: action.resellers
});
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_RESELLERS]: loadResellers
});
