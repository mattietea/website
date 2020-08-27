import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  hi: string;
}

export const Post: FC<Props> = () => {
  const router = useRouter();

  const slug = router?.query?.slug as Array<string>;

  if (!slug) return <h1>loading</h1>;

  const Component = dynamic(() => import(`../../${slug.join('/')}.mdx`));

  return (
    <div>
      <Component />
    </div>
  );
};

export default Post;
