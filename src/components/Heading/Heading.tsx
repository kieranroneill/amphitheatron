import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

// types
import { IBaseExecutionProps, ITypographyProps } from '@app/types';

const baseStyles = css<IBaseExecutionProps & ITypographyProps>`
  padding: 0;
  margin: ${(props) => props.theme.spacing['2']} 0
    ${(props) => props.theme.spacing['8']};
  text-align: ${(props) => props.textAlign};
`;
const Heading5 = styled.h5`
  ${baseStyles}
`;
const Heading4 = styled.h4`
  ${baseStyles}
`;
const Heading3 = styled.h3`
  ${baseStyles}
`;
const Heading2 = styled.h2`
  ${baseStyles}
`;
const Heading1 = styled.h1`
  ${baseStyles}
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
