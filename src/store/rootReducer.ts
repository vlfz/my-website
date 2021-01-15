import { combineReducers } from "redux";
import reposReducer from "./repos/reducer";
import { initialState as reposState } from "./repos/reducer";

export interface IStoreState {
  repos: typeof reposState;
}

export const rootReducer = combineReducers({
  repos: reposReducer,
});
