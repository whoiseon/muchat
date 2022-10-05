import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";
import userSlice from "../slices/userSlice";
import chatSlice from "../slices/chatSlice";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userSlice.reducer,
        chat: chatSlice.reducer,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
