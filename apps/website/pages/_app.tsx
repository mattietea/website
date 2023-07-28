import { ChakraProvider, Container, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import { Analytics } from '@vercel/analytics/react';

import { Header } from 'components/header';
import { theme } from 'lib/theme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main>
      <Head>
        <title>mattietea&apos;s website</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Container maxW="container.lg" minHeight="calc(100vh - 210px)">
          <Component {...pageProps} />
        </Container>
        <CSSReset />
      </ChakraProvider>
      <Analytics />
    </main>
  );
};

export default App;
