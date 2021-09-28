/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable unicorn/prefer-node-protocol */
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export type FileMatter = {
  slug: string;
  data: {
    title: string;
  };
};

export const getMatterFromFiles = (location: string): Array<FileMatter> => {
  return fs
    .readdirSync(path.join(process.cwd(), location))
    .reduce((accum: Array<FileMatter>, name: string) => {
      if (!/\.mdx?$/.test(name)) return accum;

      const source = fs.readFileSync(path.join(location, name));

      return [
        ...accum,
        {
          data: matter(source).data as FileMatter['data'],
          slug: name.replace(/\.mdx?$/, ''),
        },
      ];
    }, []);
};
