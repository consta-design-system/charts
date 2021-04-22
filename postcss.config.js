// При локальной сборке после изменений в этом конфиге нужно удалить кэш babel-плагина (папка /tmp/bptp-*)
// https://github.com/wbyoung/babel-plugin-transform-postcss#caching

module.exports = ctx => ({
  plugins: [
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        autoprefixer: true,
        'custom-selectors': true,
        'nesting-rules': false,
      },
    }),
    process.env.NODE_ENV === 'production' &&
      require('cssnano')({
        preset: [
          'default',
          {
            mergeLonghand: false,
          },
        ],
      }),
  ],
})
