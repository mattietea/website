// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['next', 'prettier', 'turbo', 'custom'],
};

module.exports = config;
