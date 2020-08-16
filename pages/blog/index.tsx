import { GetStaticProps } from 'next'
import { FC } from 'react'

import { PostMetadata } from '../../lib/types'
import { getDirectoryFiles } from '../../lib/utils/get-directory-files'

interface Props {
  posts?: Array<PostMetadata>
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <div className="container">
      Blog
      <ul>
        {posts?.map((post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
      <style jsx={true}>{``}</style>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const files = getDirectoryFiles('posts')

  const posts = files.map((file) => {
    return require('../../' + file)?.meta as PostMetadata
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blog
