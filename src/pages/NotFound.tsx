import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <h1>{t('not-found-title')}</h1>
      <h2>{t('not-found-subtitle')}</h2>
      <p>
        {t('not-found-body.part1')}
        <Link to="/">{t('not-found-body.part2')}</Link>.
      </p>
    </React.Fragment>
  );
}
