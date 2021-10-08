import { Heading, Text, Center, Box, Stack, Spacer } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';

import { Avatar } from 'components/avatar';
import { SocialList } from 'components/social-list';

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
    <Stack
      direction={['column-reverse', 'column-reverse', 'row']}
      h="calc(100vh - 200px)"
      justifyContent="center"
    >
      <Center w="100%">
        <Stack direction="column" textTransform="lowercase">
          <Text>hey there, i'm</Text>
          <Heading as="h1" fontSize="5xl">
            {profile?.name}
          </Heading>
          <Text>
            i'm a frontend engineer at{' '}
            <Text as="span" borderBottom="2px" borderColor="teal.300">
              {profile.company?.trimEnd()}
            </Text>
            ,<Box as="br" display={['none', 'block']} /> based in{' '}
            <Text as="span" borderBottom="2px" borderColor="teal.300">
              {profile.location}
            </Text>
            .
          </Text>
          <Spacer />
          <SocialList />
        </Stack>
      </Center>
      <Center pb={[18, 18, 0, 0]} w="100%">
        <Avatar size={['150px', '150px', '250px', '250px']} />
      </Center>
    </Stack>
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
