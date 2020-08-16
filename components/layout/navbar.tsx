import { FC, ComponentProps } from 'react'

import { Link } from '../link'

export const Navbar: FC = (properties) => {
  return (
    <nav className="navbar" {...properties}>
      <ul className="container">
        <li>
          <NavLink href="/" match="hard">
            mattietea
          </NavLink>
        </li>
        <li>-</li>
        <li>
          <NavLink href="/blog" match="soft">
            blog
          </NavLink>
        </li>
      </ul>
      <style jsx={true}>
        {`
          .navbar {
            display: flex;
            padding: 2rem 1.5rem;
            max-width: var(--max-width);
            margin: 0 auto;
          }

          ul {
            width: 100%;
            display: flex;
          }

          li {
            list-style: none;
            display: flex;
            margin-right: 1.5rem;
            height: 2.5rem;
            align-items: center;
          }
        `}
      </style>
    </nav>
  )
}

const NavLink: FC<ComponentProps<typeof Link>> = ({
  children,
  href,
  match,
  ...rest
}) => (
  <Link href={href} match={match}>
    {(isActive) => {
      const color = isActive ? 'primary' : 'font'

      return (
        <a style={{ color: `var(--${color}-color)` }} {...rest}>
          {children}
        </a>
      )
    }}
  </Link>
)
