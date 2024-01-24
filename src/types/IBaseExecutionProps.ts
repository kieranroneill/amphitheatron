import { ExecutionProps } from 'styled-components';

// types
import type ITheme from './ITheme';

interface IBaseExecutionProps extends ExecutionProps {
  theme: ITheme;
}

export default IBaseExecutionProps;
