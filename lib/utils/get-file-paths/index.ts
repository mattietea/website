import { readdirSync } from 'fs';
import path from 'path';

export const getFilePaths = (location: string): Array<string> => {
  const directory = path.join(process.cwd(), location);
  const dirents = readdirSync(directory, { withFileTypes: true });

  return dirents.flatMap((dirent) => {
    if (!dirent.isDirectory()) {
      return `${location}/${dirent.name}`;
    } else {
      return getFilePaths(`${location}/${dirent.name}`);
    }
  });
};
