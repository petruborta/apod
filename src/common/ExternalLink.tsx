import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface ExternalLinkProps extends PropsWithChildren {
  to: string;
}

export function ExternalLink({ children, to }: ExternalLinkProps): JSX.Element {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
