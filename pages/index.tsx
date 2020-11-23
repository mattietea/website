import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const IndexPage: FC = () => (
  <Flex
    className="container"
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 7.5rem)',
      width: '100%',
    }}
  >
    <Heading as="h1">matt thomas</Heading>
    <Text as="p">frontend developer at divido</Text>
  </Flex>
);

export default IndexPage;
