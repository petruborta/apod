import React from 'react';
import { useTranslation } from 'react-i18next';
import { CssBaseline } from '@mui/material';
import { FavouriteList } from './FavouriteList';
import { NoFavourites } from './NoFavourites';
import { selectFavourites } from './favouritesSlice';
import { useAppSelector } from '../../app/hooks';

export default function Favourites(): JSX.Element {
  const { t } = useTranslation();
  const { favourites } = useAppSelector(selectFavourites);

  return (
    <React.Fragment>
      <CssBaseline />
      <h1>{t('favourites-title')}</h1>
      {Object.keys(favourites).length !== 0 ? (
        <FavouriteList apods={Object.values(favourites)} />
      ) : (
        <NoFavourites />
      )}
    </React.Fragment>
  );
}
