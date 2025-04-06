import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageNotFoundUI } from '@components/ui/pages/PageNotFoundUI';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return <PageNotFoundUI handleClick={goHome} />;
};
