import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Документация',
    id: 'docs',
  },
  {
    title: 'Компоненты',
    id: 'components',
  },
  {
    title: 'Hooks',
    id: 'hooks',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta Сharts',
  id: 'charts',
  groups,
  group: 'Библиотека графиков',
  image,
  description:
    'Диаграммы и графики из библиотеки G2Plot с тематизацией для Consta.',
  repositoryUrl: 'https://github.com/consta-design-system/charts',
});
