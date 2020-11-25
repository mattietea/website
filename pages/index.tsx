import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';

import { getGitHubProfile } from '../lib/fetch-github';

type Props = {
  profile: {
    login: string;
    name: string;
    bio: string;
    avatarUrl: string;
  };
};

const IndexPage: FC<Props> = ({ profile }) => {
  return (
    <Flex
      className="container"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 120px)',
        width: '100%',
      }}
    >
      <Box
        boxSize={20}
        sx={{
          borderRadius: 4,
          marginBottom: 1,
          overflow: 'hidden',
        }}
      >
        <Image alt={profile.name} src={profile.avatarUrl} />
      </Box>
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
