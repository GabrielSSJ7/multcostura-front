import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loadMachines: ["machines"]
});
const INITIAL_STATE = {
  machines: []
};
const loadMachines = (state = INITIAL_STATE, action) => ({
  ...state,
  machines: action.machines
});
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_MACHINES]: loadMachines
});
