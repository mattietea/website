import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon } from '@chakra-ui/icons';
import {
  Box,
  Spacer,
  LinkProps,
  Link,
  Center,
  Divider,
  BoxProps,
} from '@chakra-ui/layout';
import NextLink from 'next/link';
import React, { FC } from 'react';

export type HeaderProps = BoxProps;

export const Header: FC<HeaderProps> = (props) => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box as="header" pos="fixed" width="100%" {...props}>
        <Center height={20} marginX="auto" maxW="container.lg">
          <NextLink href="/">
            <NavLink>mattietea</NavLink>
          </NextLink>
          <Divider
            color="currentcolor"
            height="8"
            opacity="1"
            orientation="vertical"
          />
          <NextLink href="/">
            <NavLink color="gray.500" cursor="not-allowed" variant="disabled">
              blog (...one day)
            </NavLink>
          </NextLink>
          <Spacer />
          <NavLink onClick={toggleColorMode}>
            <MoonIcon />
          </NavLink>
        </Center>
      </Box>
      <Box height={20} marginBottom={5} width="100%" />
    </>
  );
};

const NavLink: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link
      alignContent="center"
      alignItems="center"
      cursor="pointer"
      display="flex"
      height="100%"
      justifyContent="center"
      paddingX={4}
      {...rest}
    >
      {children}
    </Link>
  );
};
