import React, { FC } from 'react';
import styled from 'styled-components';

// types
import { IBaseExecutionProps } from '@app/types';

const Inner = styled.div`
  max-width: 1000px;
`;
const Outer = styled.main<IBaseExecutionProps>`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  padding-bottom: ${(props) => props.theme.spacing['5']};
  padding-top: ${(props) => props.theme.spacing['2.5']};
`;

const Main: FC = () => {
  return (
    <Outer>
      <Inner></Inner>
    </Outer>
  );
};

export default Main;
