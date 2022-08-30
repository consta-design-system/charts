import { createStand } from '##/stand/standConfig';

import image from './Bullet.image.svg';

export default createStand({
  title: 'Bullet',
  id: 'Bullet',
  group: 'components',
  image,
  description: 'Диаграмма-термометр (или диаграмма-шкала).',
  version: '0.6.4',
  status: 'stable',
  figma:
    'https://www.figma.com/embed?embed_host=charts.consta.design&url=https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq?node-id=8322:34962',
});
