import { lazy } from 'react';
import { TRoute } from './types';

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
