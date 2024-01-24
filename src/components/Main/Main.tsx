import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

// types
import { IBaseExecutionProps } from '@app/types';

const Inner = styled.div`
  max-width: 1000px;
`;
const Outer = styled.main<IBaseExecutionProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  height: 100%;
  padding-bottom: ${(props) => props.theme.spacing['5']};
  padding-top: ${(props) => props.theme.spacing['2.5']};
`;

const Main: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  );
};

export default Main;
