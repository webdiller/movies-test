import * as types from '../types';

export const searchUsers = (userName) => async (dispatch) => {
  dispatch({
    type: types.SET_USERNAME,
    payload: userName
  });
};
