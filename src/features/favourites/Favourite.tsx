import React from 'react';
import { ImageListItem } from '@mui/material';
import { APOD } from '../apod/apodSlice';
import { FavoriteIcon } from './FavouriteIcon';

interface FavouriteProps {
  apod: APOD;
}

export function Favourite({ apod }: FavouriteProps): JSX.Element {
  return (
    <ImageListItem
      sx={{
        height: 'auto',
        '&:nth-of-type(even)': { height: 'unset' },
      }}
    >
      <FavoriteIcon apodUrl={apod.url} />
      <img
        src={apod.url}
        title={apod.title}
        alt={apod.description}
        loading="lazy"
      />
    </ImageListItem>
  );
}
