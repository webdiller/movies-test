import * as types from '../types';

const initialState = {
  userName: "Петров В.А.",
  shortName: "В.А.",
};

export const auth = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_USERNAME:
      return {
        ...state,
        userName: payload
      };
    default:
      return state;
  }
};
