import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

// components
import GlobalStyle from '@app/components/GlobalStyle';
import Header from '@app/components/Header';

// types
import type { ILogger } from '@app/types';

// utils
import createTheme from '@app/utils/createTheme';

interface IProps {
  logger: ILogger;
}

const App: FC<IProps> = () => {
  return (
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
};

export default App;
