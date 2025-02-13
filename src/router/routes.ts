import { lazy } from 'react';
import React, { LazyExoticComponent } from 'react';

export type TRoute = {
  index: boolean;
  name: string;
  href: string;
  Component: LazyExoticComponent<React.FC<any>>;
};

export const routes: TRoute[] = [
  {
    index: true,
    name: 'home',
    href: '/',
    Component: lazy(() => import('../components/pages/home/HomePage.tsx')),
  },
  {
    index: false,
    name: 'resume',
    href: '/:username',
    Component: lazy(() => import('../components/pages/resume/ResumePage.tsx')),
  },
];
