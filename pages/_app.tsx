/** @jsx jsx */
import { FC } from 'react'
import Head from 'next/head'
import { ThemeProvider, jsx } from 'theme-ui'
import { theme } from '../lib/theme'
import { AppProps } from 'next/app'
import { Global } from '@emotion/core'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Matt&apos;s Website</title>
      </Head>
      <Component {...pageProps} />
      <Global
        styles={(theme) => ({
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0
          },
          body: {
            backgroundColor: theme.colors.backgroundColor
          }
        })}
      />
    </ThemeProvider>
  )
}

export default App
