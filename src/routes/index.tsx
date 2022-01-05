import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashborad';
import { Repo } from '../pages/Repo';

export const Routers: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/repositories/:repository+" component={Repo} />
      </Switch>
    </>
  );
};
