import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";
import counterSlice from "../slices/counterSlice";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        counter: counterSlice.reducer,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
