import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";
import userSlice from "../slices/userSlice";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userSlice.reducer,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
