import { readdirSync } from 'fs'
import { join } from 'path'

export const getFilePaths = (path: string): Array<string> => {
  const directory = join(process.cwd(), path)
  const dirents = readdirSync(directory, { withFileTypes: true })

  return dirents.flatMap((dirent) => {
    if (!dirent.isDirectory()) {
      return `${path}/${dirent.name}`
    } else {
      return getFilePaths(`${path}/${dirent.name}`)
    }
  })
}
