import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchNextAPODThunk, selectAPOD } from './apodSlice';
import {
  selectFavourites,
  selectIsFavourite,
  setFavourites,
} from '../favourites/favouritesSlice';

export function Buttons(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { apod } = useAppSelector(selectAPOD);
  const { favourites } = useAppSelector(selectFavourites);
  const isFavourite = useAppSelector((state) =>
    selectIsFavourite(state, apod?.url)
  );

  const noAPOD = apod === null;

  const fetchNextAPOD = (): void => {
    dispatch(fetchNextAPODThunk());
  };

  const addAPODToFavourites = (): void => {
    if (apod !== null && favourites[apod.url] === undefined) {
      dispatch(setFavourites({ ...favourites, [apod.url]: apod }));
    }
  };

  const removeAPODFromFavourites = (): void => {
    if (apod !== null && favourites[apod.url] !== undefined) {
      const { [apod.url]: favourite, ...rest } = favourites;
      dispatch(setFavourites(rest));
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {isFavourite ? (
        <Button
          variant="contained"
          endIcon={<FavoriteIcon />}
          disabled={noAPOD}
          onClick={removeAPODFromFavourites}
        >
          {t('apod-saved')}
        </Button>
      ) : (
        <Button
          variant="outlined"
          endIcon={<FavoriteBorderIcon />}
          disabled={noAPOD}
          onClick={addAPODToFavourites}
        >
          {t('apod-save')}
        </Button>
      )}
      <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        disabled={noAPOD}
        onClick={fetchNextAPOD}
      >
        {t('apod-next')}
      </Button>
    </Box>
  );
}
