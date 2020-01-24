import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  changeFile: ["file"],
  cleanUpUpload: ["clean"]
});
const INITIAL_STATE = {
  file: undefined,
  key: Date.now()
};
const changeFile = (state = INITIAL_STATE, action) => ({
  ...state,
  file: action.file
});

const cleanUpUpload = (state = INITIAL_STATE, action) => ({
  ...state,
  file: action.clean,
  key: Date.now()
});
export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_FILE]: changeFile,
  [Types.CLEAN_UP_UPLOAD]: cleanUpUpload
});
