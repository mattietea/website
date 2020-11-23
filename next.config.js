/* eslint @typescript-eslint/no-var-requires: "off" */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
});
