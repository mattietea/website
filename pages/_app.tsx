import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

import { theme } from '../lib/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>mattietea's website</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Container maxW="container.lg">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
