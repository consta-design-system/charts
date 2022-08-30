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
});
