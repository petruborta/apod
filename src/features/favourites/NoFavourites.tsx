import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NoFavourites(): JSX.Element {
  const { t } = useTranslation();

  return (
    <p>
      {t('no-favourites-body.part1')}
      <Link to="/astronomy-picture-of-the-day">
        {t('no-favourites-body.part2')}
      </Link>
      !
    </p>
  );
}
