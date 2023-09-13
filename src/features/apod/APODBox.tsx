import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { NoAPOD } from './NoAPOD';
import { selectAPOD } from './apodSlice';
import { useAppSelector } from '../../app/hooks';

export function APODBox(): JSX.Element {
  const { loading, apod } = useAppSelector(selectAPOD);

  return (
    <Box
      sx={{
        height: '100%',
        minHeight: 300,
        width: '100%',
        minWidth: 300,
        borderRadius: 2,
        marginBottom: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: loading || apod === null ? 'lightgray' : 'white',
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : apod !== null ? (
        <img
          src={apod?.url}
          title={apod?.title}
          alt={apod?.description}
          style={{ height: 'auto', width: '100%' }}
        />
      ) : (
        <NoAPOD />
      )}
    </Box>
  );
}
