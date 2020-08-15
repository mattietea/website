import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

import { Layout } from '../components/layout'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Matt's Website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style global={true} jsx={true}>
        {`
          :root {
            --bg-color: #fff;
            --primary-color: orange;
            --secondary-color: pink;
            --font-color: #2d3748;

            --max-width: 1280px;
          }

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          html {
            font-size: 18px;
          }

          body {
            background: var(--bg-color);
            color: var(--font-color);
            line-height: 1.65;
            font-weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          }

          p {
            font-size: 1em;
            margin-bottom: 1.15rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            font-family: 'Poppins', sans-serif;
            line-height: 1.15;
          }

          h1 {
            margin-top: 0;
            font-size: 2.488rem;
          }

          h2 {
            font-size: 2.074rem;
          }

          h3 {
            font-size: 1.728rem;
          }

          h4 {
            font-size: 1.44rem;
          }

          h5 {
            font-size: 1.2rem;
          }

          small,
          .text_small {
            font-size: 0.833em;
          }

          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default App
