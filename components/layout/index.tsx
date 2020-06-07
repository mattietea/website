import { FC } from 'react'

import { Navbar } from './navbar'

export const Layout: FC = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <div className="container" {...rest}>
        {children}
        <style jsx>
          {`
            .container {
              max-width: 1080px;
              padding: 0 16px;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    </>
  )
}
