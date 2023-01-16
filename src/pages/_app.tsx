import * as React from 'react';
import { Provider } from 'react-redux';
import { YMaps } from 'react-yandex-maps';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { store } from '../store';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../muiThemes/themeLight';
import '../styles/globals.css';
import 'normalize.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <SEO />
      <YMaps>
        <Provider store={store}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <CssBaseline />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </LocalizationProvider>
            </ThemeProvider>
          </CacheProvider>
        </Provider>
      </YMaps>
    </>
  );
};

export default MyApp;
