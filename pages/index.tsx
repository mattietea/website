import { Heading, Text, Center, Stack, Box } from '@chakra-ui/react';
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
      <Stack
        direction="column"
        marginRight="auto"
        spacing={2}
        textTransform="lowercase"
      >
        <Text>hey there, i'm</Text>
        <Heading as="h1" fontSize="5xl">
          {profile.name}
        </Heading>

        <Text>
          i'm a frontend engineer at{' '}
          <Text as="span" borderBottom="2px" borderColor="teal.300">
            {profile.company.trimEnd()}
          </Text>
          ,<Box as="br" display={['none', 'block']} /> based in{' '}
          <Text as="span" borderBottom="2px" borderColor="teal.300">
            {profile.location}
          </Text>
          .
        </Text>
      </Stack>
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
          repositories(isFork: false, privacy: PUBLIC, first: 10, orderBy: {field: NAME, direction: ASC}) {
            nodes {
              languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
                totalCount
                edges {
                  size
                  node {
                    name
                  }
                }
              }
            }
          }
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
