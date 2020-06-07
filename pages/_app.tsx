import { AppProps } from 'next/app'
import { FC } from 'react'
import Head from 'next/head'
import { Layout } from 'components/layout'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Matt's Website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        :root {
          --bg-color: #fff;
          --primary-color: orange;
          --secondary-color: pink;
          --font-color: #232323;

        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg-color);
          color: var(--font-color);
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          font-weight: 400;
        }

        h1, h2, h3, h4, h5, h6 {
          line-height: 9rem;
          font-weight: 600;
        }

        h2, h3, h4 {
          line-height: 6rem;
        }

        h5, h6 {
          line-height: 3rem;
        } 


        h1 {
          font-size: 6.10352em;
        }

        h2 {
          font-size: 4.88281em;
        }
        
        h3 {
          font-size: 3.90625em;
        }

        h4 {
          font-size: 3.125em;
        }

        h5 {
          font-size: 2.5em;
        }

        h6 {
          font-size: 2em;
        }
      `}</style>
    </>
  )
}

export default App
