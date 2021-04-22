module.exports = {
  ignore: [
    '**/*.css.d.ts',
    '**/__tests__/*',
    '**/__stories__/*',
    '**/__mocks__/*',
    '**/__private__/storybook/*',
  ],
  comments: false,
  presets: [
    require('@consta/widgets-configs/config/webpack/babel'),
    require('@babel/preset-typescript').default,
    [
      require('babel-preset-minify'),
      {
        builtIns: false, // // FIXME проблема с babel-plugin-minify-builtins, апдейтнуть когда пофиксят https://github.com/babel/minify/issues/904
      },
    ],
  ],
  plugins: [
    require('babel-plugin-transform-postcss'),
    [
      require('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
