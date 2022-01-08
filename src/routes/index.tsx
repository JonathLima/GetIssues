import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "dashboard"*/ '../pages/Dashborad'
    ),
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "repo"*/ '../pages/Repo'
    ),
);

export const Routers: React.FC = () => {
  return (
    <>
      <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/repositories/:repository+" component={Repo} />
        </Switch>
      </React.Suspense>
    </>
  );
};
