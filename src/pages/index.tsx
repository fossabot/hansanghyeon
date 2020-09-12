import Head from 'next/head';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';
import { GridThemeProvider, Container, Row } from 'styled-bootstrap-grid';
import Grid from '@style/Grid';
// Components
import Resume from '@template/Resume';

const Home = ({ blockMap }: any) => {
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
        <title>Main Home</title>
      </Head>
      <GridThemeProvider gridTheme={_Grid}>
        <>
          <Resume />
          <Container>
            <Row>
              <NotionRenderer blockMap={blockMap} />
            </Row>
          </Container>
        </>
      </GridThemeProvider>
    </>
  );
};

export default Home;
export async function getStaticProps() {
  const { data } = await axios(
    'https://notion-api.splitbee.io/v1/page/ccd992aba32f412581339a3f5df04fe8',
  );

  return {
    props: {
      blockMap: data,
    },
  };
}
