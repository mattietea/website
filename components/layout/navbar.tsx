import Link from 'next/link'
import { FC } from 'react'

export const Navbar: FC = (properties) => {
  return (
    <nav className="navbar" {...properties}>
      <ul className="container">
        <li>
          <Link href="/">
            <a>mattietea</a>
          </Link>
        </li>
        <li>-</li>
        <li>
          <a>blog</a>
        </li>
        <li>
          <a>playground</a>
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

          a:hover {
            color: var(--primary-color);
          }
        `}
      </style>
    </nav>
  )
}
