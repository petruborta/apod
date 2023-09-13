import React, { useEffect, useState } from 'react';
import { ImageList, useMediaQuery, useTheme } from '@mui/material';
import { Favourite } from './Favourite';
import { APOD } from '../apod/apodSlice';

interface FavoriteListProps {
  apods: APOD[];
}

export function FavouriteList({ apods }: FavoriteListProps): JSX.Element {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [cols, setCols] = useState(3);

  useEffect(() => {
    if (isSmallScreen) {
      setCols(1);
    } else if (isMediumScreen) {
      setCols(2);
    } else {
      setCols(3);
    }
  }, [isSmallScreen, isMediumScreen]);

  return (
    <ImageList variant="woven" cols={cols} gap={16}>
      {apods.map((apod) => (
        <Favourite key={apod.url} apod={apod} />
      ))}
    </ImageList>
  );
}
