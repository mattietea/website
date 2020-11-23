import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { Navbar } from './navbar';

export const Layout: FC = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          marginX: 'auto',
          maxWidth: 'container.xl',
          padding: 6,
        }}
        {...rest}
      >
        {children}
      </Flex>
    </>
  );
};
