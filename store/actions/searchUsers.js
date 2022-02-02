import * as types from '../types';

export const setUserSearchSubstring = (searchSubstring) => async (dispatch) => {
  dispatch({
    type: types.SET_USER_SEARCH_SUBSTRING,
    payload: searchSubstring
  });
};
