import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, CssBaseline } from '@mui/material';
import { APODBox } from './APODBox';
import { Buttons } from './Buttons';
import { clearError, fetchRandomAPODThunk, selectAPOD } from './apodSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Error } from '../../common/Error';

export default function APOD(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector(selectAPOD);

  const handleClose = useCallback(() => {
    dispatch(clearError());
  }, []);

  useEffect(() => {
    dispatch(fetchRandomAPODThunk());

    return handleClose;
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <h1>{t('apod-title')}</h1>
      <Container maxWidth="sm" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <APODBox />
        <Buttons />
      </Container>
      <Error onClose={handleClose}>{error}</Error>
    </React.Fragment>
  );
}
