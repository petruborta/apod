import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, CssBaseline } from '@mui/material';

export function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <h1>{t('home-title')}</h1>
      </Container>
    </React.Fragment>
  );
}
