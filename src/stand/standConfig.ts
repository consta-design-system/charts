import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta Сharts',
  id: 'charts',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
    },
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
    },
    {
      title: 'Hooks',
      id: 'hooks',
    },
  ],
  group: 'Библиотеки',
  image,
  description:
    'Диаграммы и графики из библиотеки G2Plot с тематизацией для Consta',
  repositoryUrl: 'https://github.com/consta-design-system/charts',
  order: 20,
});
