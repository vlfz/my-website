import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../store/repos/actions";
import { IStoreState } from "../store/rootReducer";

const ProjectsPage = () => {
  const repos = useSelector((s: IStoreState) => s.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (repos.length <= 0) {
      dispatch(fetchRepos());
    }
  }, [repos, dispatch]);

  return (
    <>
      <section className="content" style={{ maxWidth: "800px" }}>
        {repos.map((repo) => (
          <div key={repo.id}>{repo.name}</div>
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
