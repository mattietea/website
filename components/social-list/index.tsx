import { Link, Stack, StackProps } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React, { FC } from 'react';
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';

type SocialListProps = StackProps;

const GithubIcon = chakra(RiGithubFill);
const LinkedInIcon = chakra(RiLinkedinBoxFill);

export const SocialList: FC<SocialListProps> = ({
  direction = 'row',
  ...props
}) => {
  const iconSize = 20;

  return (
    <Stack direction={direction} spacing={3} {...props}>
      <Link href="https://github.com/mattietea" isExternal={true}>
        <GithubIcon size={iconSize} />
      </Link>
      <Link href="https://www.linkedin.com/in/mattietea" isExternal={true}>
        <LinkedInIcon size={iconSize} />
      </Link>
    </Stack>
  );
};
