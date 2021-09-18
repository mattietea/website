import { ChakraProvider, Container, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';

import { Header } from 'components/header';
import { theme } from 'lib/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>mattietea's website</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Container maxW="container.lg">
          <Component {...pageProps} />
        </Container>
        <CSSReset />
      </ChakraProvider>
    </>
  );
};

export default App;
