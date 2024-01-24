import { DefaultTheme } from 'styled-components';

// types
import IPalette from './IPalette';
import ISpacing from './ISpacing';
import ITypography from './ITypography';

interface ITheme extends DefaultTheme {
  palette: IPalette;
  spacing: ISpacing;
  typography: ITypography;
}

export default ITheme;
