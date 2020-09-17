import { AppProps } from 'next/app';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import DefaultTheme from '@style/Themes';
// components
import Grid from '@style/Grid';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GridThemeProvider gridTheme={Grid}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default App;
