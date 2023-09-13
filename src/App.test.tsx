import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import { CircularProgress } from '@mui/material';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<CircularProgress />}>
            <App />
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
  expect(screen.getByTestId(/app/i)).toBeInTheDocument();
});
