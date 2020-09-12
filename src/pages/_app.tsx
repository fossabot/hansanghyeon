import 'react-notion/src/styles.css';
import { AppProps } from 'next/app';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { createGlobalStyle } from 'styled-components';
// components
import Grid from '@style/Grid';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <GridThemeProvider gridTheme={Grid}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </GridThemeProvider>
  );
}

export default App;
