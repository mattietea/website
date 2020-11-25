import { Flex, Heading, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';

import { getGitHubProfile } from '../lib/fetch-github';

type Props = {
  profile: {
    login: string;
    name: string;
    bio: string;
  };
};

const IndexPage: FC<Props> = ({ profile }) => {
  return (
    <Flex
      className="container"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 7.5rem)',
        width: '100%',
      }}
    >
      <Heading as="h1" textTransform="lowercase">
        {profile.name}
      </Heading>
      <Text as="p" textTransform="lowercase">
        {profile.bio}
      </Text>
    </Flex>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const profile = await getGitHubProfile();

  return {
    props: {
      profile,
    },
  };
};
