import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

// types
import { IBaseExecutionProps, ITypographyProps } from '@app/types';

const Heading5 = styled.h5.attrs<IBaseExecutionProps & ITypographyProps>(
  (props) => ({
    ...props,
  })
)`
  padding: 0;
  margin: ${(props) => props.theme.spacing['2']} 0
    ${(props) => props.theme.spacing['8']};
  text-align: ${(props) => props.textAlign};
`;
const Heading4 = styled.h4.attrs<IBaseExecutionProps & ITypographyProps>(
  (props) => ({
    ...props,
  })
)`
  padding: 0;
  margin: ${(props) => props.theme.spacing['2']} 0
    ${(props) => props.theme.spacing['8']};
  text-align: ${(props) => props.textAlign};
`;
const Heading3 = styled.h3.attrs<IBaseExecutionProps & ITypographyProps>(
  (props) => ({
    ...props,
  })
)`
  padding: 0;
  margin: ${(props) => props.theme.spacing['2']} 0
    ${(props) => props.theme.spacing['8']};
  text-align: ${(props) => props.textAlign};
`;
const Heading2 = styled.h2.attrs<IBaseExecutionProps & ITypographyProps>(
  (props) => ({
    ...props,
  })
)`
  padding: 0;
  margin: ${(props) => props.theme.spacing['2']} 0
    ${(props) => props.theme.spacing['8']};
  text-align: ${(props) => props.textAlign};
`;
const Heading1 = styled.h1.attrs<IBaseExecutionProps & ITypographyProps>(
  (props) => ({
    ...props,
  })
)`
  padding: 0;
  margin: ${(props) => props.theme.spacing['2']} 0
    ${(props) => props.theme.spacing['8']};
  text-align: ${(props) => props.textAlign};
`;

const Heading: FC<ITypographyProps & PropsWithChildren> = ({
  children,
  ...typographyProps
}: ITypographyProps & PropsWithChildren) => {
  switch (typographyProps.size) {
    case 'xs':
      return <Heading5 {...typographyProps}>{children}</Heading5>;
    case 'sm':
      return <Heading4 {...typographyProps}>{children}</Heading4>;
    case 'lg':
      return <Heading2 {...typographyProps}>{children}</Heading2>;
    case 'xl':
      return <Heading1 {...typographyProps}>{children}</Heading1>;
    case 'md':
    default:
      return <Heading3 {...typographyProps}>{children}</Heading3>;
  }
};

export default Heading;
