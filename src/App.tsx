import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { Layout } from './layout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const APOD = lazy(async () => await import('./features/apod/APOD'));
const Favourites = lazy(
  async () => await import('./features/favourites/Favourites')
);

export default function App(): JSX.Element {
  return (
    <Container sx={{ textAlign: 'center' }} data-testid="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="astronomy-picture-of-the-day" element={<APOD />} />
          <Route path="favourites" element={<Favourites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
