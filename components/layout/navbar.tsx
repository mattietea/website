import { Flex, Link as UiLink } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Link } from '../link';

export const Navbar: FC = (properties) => {
  return (
    <Flex as="nav">
      <nav className="navbar" {...properties}>
        <ul className="container">
          <li>
            <Link href="/" match="hard">
              mattietea
            </Link>
          </li>
          <li>-</li>
          <li>
            <Link href="/blog" match="soft">
              <UiLink>blog</UiLink>
            </Link>
          </li>
        </ul>
      </nav>
    </Flex>
  );
};
