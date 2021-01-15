import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/index";
import ReduxThunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
