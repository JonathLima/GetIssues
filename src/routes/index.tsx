import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashborad';
import { Repo } from '../pages/Repo';

export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories" element={<Repo />} />
    </Routes>
  );
};
