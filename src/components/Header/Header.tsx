import React, { FC } from 'react';
import styled from 'styled-components';

// images
import bannerLogo from '@app/images/banner_logo.png';

// types
import { IBaseExecutionProps } from '@app/types';

const Inner = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${(props) => props.theme.spacing['3.5']}
    ${(props) => props.theme.spacing['5']};
`;
const Logo = styled.img<IBaseExecutionProps>`
  max-height: ${(props) => props.theme.spacing['16']};
`;
const Outer = styled.header<IBaseExecutionProps>`
  width: 100%;
`;

const Header: FC = () => {
  return (
    <Outer>
      <Inner>
        <Logo alt={`Logo with ${__APP_TITLE__} name`} src={bannerLogo} />
      </Inner>
    </Outer>
  );
};

export default Header;
