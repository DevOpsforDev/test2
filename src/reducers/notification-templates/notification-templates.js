﻿import initialState from "../../store/initialState";
import { GET_TEMPLATES_SUCCESS } from "../../actions/notification-templates";

const reducer = (state = initialState.notificationTemplates, action) => {
  if (action.type === GET_TEMPLATES_SUCCESS) {
    return {
      data: [...action.payload],
    };
  }

  return state;
};

export default reducer;
