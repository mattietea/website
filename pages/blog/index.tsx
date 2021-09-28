import { Heading, UnorderedList } from '@chakra-ui/layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';

import { FileMatter, getMatterFromFiles } from 'lib/get-matter-from-files';

type Props = {
  posts: Array<FileMatter>;
};

const BlogPage: FC<Props> = ({ posts }) => {
  return (
    <>
      <Heading>blog</Heading>
      <UnorderedList>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`blog/${post.slug}`}>{post?.data?.title}</Link>
          </li>
        ))}
      </UnorderedList>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getMatterFromFiles('content/blog');

  return {
    props: { posts },
  };
};
