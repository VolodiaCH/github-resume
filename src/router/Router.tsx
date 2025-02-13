import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import { routes } from './routes.ts';
import Loading from '../components/common/Loading.tsx';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ index, name, href, Component }) => (
          <Route
            key={name}
            index={index}
            path={href}
            element={
              <Suspense fallback={<Loading />}>
                {React.createElement(Component)}
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};
