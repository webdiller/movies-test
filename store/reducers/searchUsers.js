import * as types from "../types";

const initialState = {
  userSubstring: "",
};

export const searchUsers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_USER_SEARCH_SUBSTRING:
      return {
        ...state,
        userSubstring: payload,
      };
    default:
      return state;
  }
};
