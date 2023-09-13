import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout(): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}
