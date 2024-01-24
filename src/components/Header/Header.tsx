import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// components
import Heading from '@app/components/Heading';

// images
import bannerLogo from '@app/images/banner_logo.png';

// types
import { IBaseExecutionProps } from '@app/types';

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.spacing['3.5']}
    ${(props) => props.theme.spacing['5']};
`;
const Logo = styled.img<IBaseExecutionProps>`
  margin-bottom: ${(props) => props.theme.spacing['5']};
  max-height: ${(props) => props.theme.spacing['16']};
`;
const Outer = styled.header<IBaseExecutionProps>`
  width: 100%;
`;

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <Outer>
      <Inner>
        {/*logo*/}
        <Logo alt={`Logo with ${__APP_TITLE__} name`} src={bannerLogo} />

        {/*tagline*/}
        <Heading textAlign="center">{t('captions.tagline')}</Heading>
      </Inner>
    </Outer>
  );
};

export default Header;
