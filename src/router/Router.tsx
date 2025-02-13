import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.tsx'
import { routes } from './routes.ts'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ index, name, href, Component }) => (
          <Route
            // key={name}
            index={index}
            path={href}
            element={
              <Suspense fallback={<div />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  )
}
