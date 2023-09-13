import React from 'react';
import { useTranslation } from 'react-i18next';

export function NoAPOD(): JSX.Element {
  const { t } = useTranslation();

  return <p>{t('no-apod')}</p>;
}
