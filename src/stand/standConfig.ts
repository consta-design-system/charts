import { createConfig, ListCardBig, ListCardList } from '@consta/stand';

import image from './ConstaImage.png';
import { StandPageDecoration as standPageDecoration } from './standPageDecoration';

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
      renderList: ListCardBig,
    },
    {
      title: 'Hooks',
      id: 'hooks',
      renderList: ListCardList,
    },
  ],
  group: 'Библиотеки',
  image,
  standPageDecoration,
  description:
    'Диаграммы и графики из библиотеки G2Plot с тематизацией для Consta',
  repositoryUrl: 'https://github.com/consta-design-system/charts',
  order: 20,
});
