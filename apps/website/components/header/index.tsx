import { useColorMode } from '@chakra-ui/color-mode';
import {
  Box,
  Spacer,
  LinkProps,
  Link,
  Center,
  Divider,
  BoxProps,
} from '@chakra-ui/layout';
import React, { FC } from 'react';
import { RiMoonFill as MoonIcon, RiSunFill as SunIcon } from 'react-icons/ri';

export type HeaderProps = BoxProps;

export const Header: FC<HeaderProps> = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <>
      <Box as="header" pos="fixed" width="100%" {...props}>
        <Center height={20} marginX="auto" maxW="container.lg">
          <NavLink>mattietea</NavLink>
          <Divider
            color="currentcolor"
            height="8"
            opacity="1"
            orientation="vertical"
          />
          <Spacer />
          <NavLink onClick={toggleColorMode}>
            {isDark ? <SunIcon /> : <MoonIcon />}
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
