import Head from 'next/head';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import Grid from '@style/Grid';
// Components
import Resume from '@template/Resume';

const Home = () => {
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xxl: 768,
        xl: 768,
        lg: 768,
      },
    },
  };
  return (
    <>
      <Head>
        <title>999번만큼 코딩해</title>
      </Head>
      <GridThemeProvider gridTheme={_Grid}>
        <>
          <Resume />
        </>
      </GridThemeProvider>
    </>
  );
};

export default Home;
export async function getStaticProps() {
  return {
    props: {},
  };
}
