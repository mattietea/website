import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { theme } from '../lib/theme';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            crossOrigin="true"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@500;600&family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
