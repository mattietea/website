import {
  Box,
  Center,
  ChakraProps,
  Link,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { FC } from 'react';

export const Navbar: FC<ChakraProps> = (properties) => {
  return (
    <Box
      as={'nav'}
      sx={{
        borderBottom: '1px',
        borderColor: 'gray.200',
      }}
      {...properties}
    >
      <Wrap
        sx={{
          marginX: 'auto',
          maxWidth: 'container.xl',
          paddingX: 6,
        }}
        {...properties}
      >
        <WrapItem>
          <NavLink>mattietea</NavLink>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const NavLink: FC = ({ children }) => {
  return (
    <NextLink href="/">
      <Link
        sx={{
          fontWeight: 'semibold',
        }}
      >
        <Center sx={{ height: 16 }}>{children}</Center>
      </Link>
    </NextLink>
  );
};
