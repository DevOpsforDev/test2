﻿export const SET_OPEN_STATUS = "IS_OPEN";

export function isOpen(data) {
  return {
    type: SET_OPEN_STATUS,
    payload: data,
  };
}

export function TogleOpenWind(data) {
  return dispatch => {
    dispatch(isOpen(data));
  };
}
