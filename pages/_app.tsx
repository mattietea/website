import { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Matt&apos;s Website</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --bg-color: white;
          --primary-color: orange;
          --secondary-color: pink;
          --font-size: 16px;
        }

        * {
          padding: 0;
          margin: 0;
        }

        body {
          background: var(--background-color);
          font-size: var(--font-size-body);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }
      `}</style>
    </>
  )
}

export default App
