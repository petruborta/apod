import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ExternalLink } from '../common/ExternalLink';
import logo from '../logo.svg';

const AppHeader = styled.header`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppLogo = styled.img`
  height: 3rem;
  line-height: unset;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export function Header(): JSX.Element {
  const { t } = useTranslation();

  return (
    <AppHeader>
      <ExternalLink to="https://guider-ai.com/">
        <AppLogo src={logo} alt={t('logo-alt')} />
      </ExternalLink>
      <nav>
        <NavLink to="/">{t('home')}</NavLink>
        <NavLink to="/astronomy-picture-of-the-day">{t('apod')}</NavLink>
        <NavLink to="/favourites">{t('favourites')}</NavLink>
      </nav>
    </AppHeader>
  );
}
