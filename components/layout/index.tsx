import { FC } from 'react'

import { Navbar } from './navbar'

export const Layout: FC = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <div className="container" {...rest}>
        {children}
        <style jsx={true}>
          {`
            .container {
              max-width: var(--max-width);
              padding: 1rem 1.5rem 0;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    </>
  )
}
