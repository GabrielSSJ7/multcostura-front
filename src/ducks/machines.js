import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loadMachines: ["machines"],
  loadMachinesForFilters: ["machines"],
  loadFilters: ["filters"]
});
const INITIAL_STATE = {
  machines: [],
  machinesForFilters: [],
  filters: {}
};
const loadMachines = (state = INITIAL_STATE, action) => ({
  ...state,
  machines: action.machines
});

const loadMachinesForFilters = (state = INITIAL_STATE, action) => ({
  ...state,
  machinesForFilters: action.machines
});


const loadFilters = (state = INITIAL_STATE, action) => ({
  ...state,
  filters: action.filters
});


export default createReducer(INITIAL_STATE, {
  [Types.LOAD_MACHINES]: loadMachines,
  [Types.LOAD_MACHINES_FOR_FILTERS]: loadMachinesForFilters,
  [Types.LOAD_FILTERS]: loadFilters
});
