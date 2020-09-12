import 'react-notion/src/styles.css';
import { AppProps } from 'next/app';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// components
import Grid from '@style/Grid';

function App({ Component, pageProps }: AppProps) {
  return (
    <GridThemeProvider gridTheme={Grid}>
      <Component {...pageProps} />
    </GridThemeProvider>
  );
}

export default App;
