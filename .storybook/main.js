const getCommonConfig = require('@consta/widgets-configs/config/webpack/common.webpack')
const webpackMerge = require('webpack-merge')
const omit = require('lodash/omit')
const flowRight = require('lodash/flowRight')
const glob = require('fast-glob')

const { withMdxRules, disableCSSModules } = require('../webpack/helpers')

module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    'storybook-addon-react-docgen',
    '@storybook/addon-docs/register',
    'storybook-addon-themes',
    'storybook-addon-designs',
  ],
  stories: async () => {
    const isDevelop = process.env.NODE_ENV === 'development'

    const paths = await glob(
      [
        'src/**/*.stories.tsx',
        !isDevelop && '!src/core/**/*.stories.tsx',
        '**/*.stories.mdx',
      ].filter(
        Boolean
      ), {
        ignore: ['node_modules']
      }
    )

    return paths.map(path => `../${path}`)
  },
  webpackFinal: config => {
    // Exclude default module rules to fix svg import issue: https://github.com/storybooks/storybook/issues/5926
    const baseSBConfig = omit(config, ['module'])

    const projectConfig = flowRight([withMdxRules, disableCSSModules])(
      getCommonConfig({ withDocgen: true })
    )

    return webpackMerge(baseSBConfig, projectConfig)
  },
}
