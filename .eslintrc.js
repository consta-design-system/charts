module.exports = {
  extends: [require.resolve('@consta/widgets-configs/eslintrc')],
  overrides: [
    {
      files: ['./src/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': ['off'],
        '@typescript-eslint/no-shadow': ['off'],
      },
    },
  ],
  plugins: ['todo-plz'],
  rules: {
    'todo-plz/ticket-ref': [
      'error',
      {
        pattern: '(GDC-|UI-Kit#)[0-9]+',
        terms: ['TODO', 'todo'],
      },
    ],
  },
}
