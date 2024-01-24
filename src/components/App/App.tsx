import React, { FC, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

// components
import Footer from '@app/components/Footer';
import GlobalStyle from '@app/components/GlobalStyle';
import Header from '@app/components/Header';
import Main from '@app/components/Main';
import VideoPlayer from '@app/components/VideoPlayer';

// types
import type { IProps } from './types';

// utils
import createTheme from '@app/utils/createTheme';

const App: FC<IProps> = ({ i18next }: IProps) => {
  const { t } = useTranslation();
  const defaultTitle: string = `${__APP_TITLE__} | ${t('captions.tagline')}`;
  // states
  const [title, setTitle] = useState<string>(defaultTitle);
  // handlers
  const handlePlayerStart = () => {};
  const handlePlayerStop = () => setTitle(defaultTitle);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={createTheme}>
          <GlobalStyle />

          <Header />

          <Main>
            <VideoPlayer
              onStart={handlePlayerStart}
              onStop={handlePlayerStop}
            />
          </Main>

          <Footer />
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
