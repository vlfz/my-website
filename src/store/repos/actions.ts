import { Dispatch } from "redux";
import { GitHubRepository } from "../../interfaces";

export const actionTypes = {
  FETCH_REPOS: "FETCH_REPOS",
  FETCH_REPOS_FAIL: "FETCH_REPOS_FAIL",
  RECEIVE_REPOS: "RECEIVE_REPOS",
};

export const fetchRepos = (failureCallback = () => {}) => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_REPOS });

  fetch("https://api.github.com/users/MORET5U/repos")
    .then((response) => response.json())
    .then((data: GitHubRepository[]) => {
      const filteredData = data.filter((repo) => !repo.fork).filter((repo) => repo.description !== null);

      dispatch({ type: actionTypes.RECEIVE_REPOS, payload: filteredData });
    })
    .catch((err) => {
      failureCallback();
      dispatch({ type: actionTypes.FETCH_REPOS_FAIL });
    });
};
