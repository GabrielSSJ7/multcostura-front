import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  changeMessage: ["message"],
  changeMessageType: ["messageType"],
  changeMessageColor: ["messageColor"]
});
const INITIAL_STATE = {
  message: "",
  messageType: false,
  messageColor: ""
};
const changeMessage = (state = INITIAL_STATE, action) => ({
  ...state,
  message: action.message
});

const changeMessageType = (state = INITIAL_STATE, action) => ({
  ...state,
  messageType: action.messageType
});

const changeMessageColor = (state = INITIAL_STATE, action) => ({
  ...state,
  messageColor: action.messageColor
});
export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_MESSAGE]: changeMessage,
  [Types.CHANGE_MESSAGE_TYPE]: changeMessageType,
  [Types.CHANGE_MESSAGE_COLOR]: changeMessageColor
});
