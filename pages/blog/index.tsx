import { Heading, Link, Text, UnorderedList } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import React, { FC } from 'react';

import { PostMetadata } from '../../lib/types';
import { getFilePaths } from '../../lib/utils/get-file-paths';

interface Props {
  posts?: Array<PostMetadata>;
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <>
      <Heading>Blog</Heading>
      <UnorderedList>
        {posts?.map((post) => (
          <li key={post.path}>
            <NextLink href={`blog/${post.path}`}>
              <Link sx={{ display: 'flex', flexDirection: 'column' }}>
                <Heading as="h5" size="sm">
                  {post.title}
                </Heading>
                <Text as="p">{post.description}</Text>
              </Link>
            </NextLink>
          </li>
        ))}
      </UnorderedList>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePaths = getFilePaths('posts');

  const posts = filePaths.map((filePath) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const post = require('../../' + filePath)?.meta;

    const [path] = filePath.split('.');

    return {
      ...post,
      path,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
