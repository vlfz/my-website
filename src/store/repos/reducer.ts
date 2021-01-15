import { AnyAction } from "redux";
import { actionTypes } from "./actions";
import { GitHubRepository } from "../../interfaces";

export const initialState: GitHubRepository[] = [];

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.RECEIVE_REPOS: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default reducer;
