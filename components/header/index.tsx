import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon } from '@chakra-ui/icons';
import { Box, Center, Container, Link, Spacer } from '@chakra-ui/layout';
import React from 'react';

export const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box as="header" pos="fixed" width="100%">
      <Container
        direction="row"
        display="flex"
        height="20"
        marginX="auto"
        maxW="container.lg"
      >
        <Center as={Link}>mattietea</Center>

        <Spacer />
        <Center as={Button} variant="link" onClick={toggleColorMode}>
          <MoonIcon />
        </Center>
      </Container>
    </Box>
  );
};
