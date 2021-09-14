import { Heading, Text, Flex, Center } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';

type Props = {
  profile: {
    login: string;
    name: string;
    bio: string;
    avatarUrl: string;
    location: string;
    company: string;
  };
};

const IndexPage: FC<Props> = ({ profile }) => {
  return (
    <Center h="100vh">
      <Flex direction="column" spacing={1} width="100%">
        <Text>hey there, i'm</Text>
        <Heading as="h1" fontSize="4xl" textTransform="lowercase">
          {profile.name}
        </Heading>
      </Flex>
    </Center>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const request = await fetch('https://api.github.com/graphql', {
    body: JSON.stringify({
      query: `{ 
        viewer { 
          name 
          bio 
          company
          email 
          location 
        } 
      }`,
    }),
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    method: 'POST',
  });

  const { data } = await request.json();

  return {
    props: {
      profile: data?.viewer,
    },
  };
};
