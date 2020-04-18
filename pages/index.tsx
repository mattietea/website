/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'

const IndexPage = () => (
  <Fragment>
    <Styled.div
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Styled.h1 sx={{ fontSize: 6 }}>
        Welcome<span sx={{ color: 'primary' }}>.</span>
      </Styled.h1>
      <Styled.a
        sx={{
          position: 'absolute',
          fontSize: 4,
          bottom: '8vh',
          height: 40,
          width: 40,
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        ↓
      </Styled.a>
    </Styled.div>
    <Styled.h2
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingY: 40
      }}
    >
      Nope, no more, that&apos;s it... 😂
    </Styled.h2>
  </Fragment>
)

export default IndexPage
