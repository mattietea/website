/* eslint-disable unicorn/prefer-node-protocol */
import path from 'path';

import { Heading, Text } from '@chakra-ui/layout';
import { bundleMDXFile } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useMemo } from 'react';

import { FileMatter, getMatterFromFiles } from 'lib/get-matter-from-files';

type Props = {
  data: FileMatter['data'];
  code: string;
};

const BlogPostPage: NextPage<Props> = ({ code, data }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Heading as="h1" mb={3} size="xl">
        {data.title}
      </Heading>
      <Component
        components={{
          h1: (props) => <Heading {...props} as="h2" mb={2} mt={5} size="lg" />,
          h2: (props) => <Heading {...props} as="h3" mb={2} mt={5} size="md" />,
          h3: (props) => <Heading {...props} as="h4" mb={2} mt={5} size="sm" />,
          p: (props) => <Text {...props} as="p" mb={1} size="sm" />,
        }}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;

  const file = await bundleMDXFile(
    path.join('content', 'blog', slug + '.mdx'),
    {
      cwd: process.cwd(),
    },
  );

  return {
    props: {
      code: file.code,
      data: file.frontmatter as Props['data'],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getMatterFromFiles('content/blog').map((matter) => ({
    params: { slug: matter.slug },
  }));

  return {
    fallback: false,
    paths,
  };
};

export default BlogPostPage;
