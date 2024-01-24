import styled from 'styled-components';

// types
import { IBaseExecutionProps, ITypographyProps } from '@app/types';

const Text = styled.p<IBaseExecutionProps & ITypographyProps>`
  font-size: ${({ size = 'md' }) => {
    switch (size) {
      case 'xs':
        return '0.75rem';
      case 'sm':
        return '0.875rem';
      case 'lg':
        return '1.125rem';
      case 'xl':
        return '1.25rem';
      case 'md':
      default:
        return '1rem';
    }
  }};
  padding: 0;
  margin: ${(props) => props.theme.spacing['1']} 0
    ${(props) => props.theme.spacing['1.5']};
`;

export default Text;
