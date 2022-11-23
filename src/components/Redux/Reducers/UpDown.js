import { INCREAMENT, DECREAMENT } from "../Constants/index";
const initialState = [0, ""];

const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT:
      state[0] = action.payload["num"];
      state[1] = action.payload["data"].title;

      return [state[0], state[1]];
    case DECREAMENT:
      state[0] = action.payload["num"];
      state[1] = action.payload["data"].title;
      return [state[0], state[1]];
    default:
      return [state[0], state[1]];
  }
};

export default changeCount;
