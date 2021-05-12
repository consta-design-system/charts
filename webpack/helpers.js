const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')
const remarkExternalLinks = require('remark-external-links')
const remarkSlug = require('remark-slug')

const createRuleForMdx = (options = {}) => ({
  test: /\.mdx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    },
    {
      loader: '@mdx-js/loader',
      options: {
        remarkPlugins: [remarkSlug, remarkExternalLinks],
        ...options,
      },
    },
  ],
})

module.exports = {
  withMdxRules(config) {
    // // Для сборки mdx файлов, которые мы импортируем внутри TooltipContentForMultipleValues.stories.tsx
    // config.module.rules.push({
    //   include: /src|.storybook/,
    //   ...createRuleForMdx(),
    // })

    // // Для сборки mdx файлов, которые напрямую подключаются в storybook из папки docs
    // config.module.rules.push({
    //   exclude: /src|.storybook/,
    //   ...createRuleForMdx({
    //     compilers: [createCompiler({})],
    //   }),
    // })

    config.module.rules.push({
      test: /(\/|\\)(src|\.storybook)(\/|\\)[\w/\\.-]*\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkSlug, remarkExternalLinks],
          },
        },
      ],
    })

    config.module.rules.push({
      test: /(\/|\\)docs(\/|\\)[\w/\\.-]*\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkSlug, remarkExternalLinks],
            compilers: [createCompiler({})],
          },
        },
      ],
    })

    return config
  },
  disableCSSModules(config) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules.map(rule => {
          if (String(rule.test) === String(/\.css$/)) {
            return {
              ...rule,
              use: rule.use
                .map(item => {
                  if (typeof item === 'string' && item.includes('css-modules-typescript-loader')) {
                    return
                  }

                  if (
                    typeof item.loader === 'string' &&
                    !item.loader.includes('postcss') &&
                    item.loader.includes('css-loader')
                  ) {
                    return {
                      ...item,
                      options: {
                        ...item.options,
                        modules: false,
                      },
                    }
                  }

                  return item
                })
                .filter(Boolean),
            }
          }

          return rule
        }),
      },
    }
  },
}
