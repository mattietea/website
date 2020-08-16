import { useRouter } from 'next/dist/client/router'
import NextLink, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'

interface Props extends LinkProps {
  children: ((isActive: boolean) => ReactNode) | ReactNode
  match?: 'hard' | 'soft'
}

export const Link: FC<Props> = ({ href, children, match, ...rest }) => {
  const router = useRouter()

  let isActive = false

  if (match === 'soft') {
    isActive = router.pathname.includes(href.toString())
  }

  if (match === 'hard') {
    isActive = router.pathname === href
  }

  return (
    <NextLink href={href} {...rest}>
      {children instanceof Function ? children(isActive) : children}
    </NextLink>
  )
}
