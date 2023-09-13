import React from 'react';
import { IconButton } from '@mui/material';
import MuiFavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFavourites, setFavourites } from './favouritesSlice';

interface FavoriteIconProps {
  apodUrl: string;
}

export function FavoriteIcon({ apodUrl }: FavoriteIconProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector(selectFavourites);

  const removeAPODFromFavourites = (): void => {
    const { [apodUrl]: favourite, ...rest } = favourites;
    dispatch(setFavourites(rest));
  };

  return (
    <IconButton
      color="primary"
      sx={{
        height: '1.5em',
        width: '1.5em',
        padding: 0.5,
        borderRadius: '50%',
        position: 'absolute',
        top: 10,
        right: 10,
        cursor: 'pointer',
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
        },
      }}
      onClick={removeAPODFromFavourites}
    >
      <MuiFavoriteIcon />
    </IconButton>
  );
}
