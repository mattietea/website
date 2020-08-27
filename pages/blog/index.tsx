import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Link } from '../../components/link';
import { PostMetadata } from '../../lib/types';
import { getFilePaths } from '../../lib/utils/get-file-paths';

interface Props {
  posts?: Array<PostMetadata>;
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <div className="container">
      Blog
      <ul>
        {posts?.map((post) => (
          <li key={post.path}>
            <Link href={`blog/${post.path}`}>
              <a style={{ display: 'flex', flexDirection: 'column' }}>
                {post.title}
                <small>{post.description}</small>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx={true}>{``}</style>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePaths = getFilePaths('posts');

  const posts = filePaths.map((filePath) => {
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
