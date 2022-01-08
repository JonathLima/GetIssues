import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as R from './style';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface GithubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repo: React.FC = () => {
  const [repository, Setrepository] = React.useState<GithubRepository | null>(
    null,
  );
  const [issues, Setissues] = React.useState<GithubIssue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  React.useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then(response => Setrepository(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then(response => Setissues(response.data));
  }, [params.repository]);

  return (
    <>
      <R.Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </R.Header>

      {repository && (
        <R.RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </R.RepoInfo>
      )}

      <R.Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </R.Issues>
    </>
  );
};

export default Repo;
