import { FC } from 'react';

import { Navbar } from './navbar';

export const Layout: FC = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <div className="container" {...rest}>
        {children}
      </div>
    </>
  );
};
