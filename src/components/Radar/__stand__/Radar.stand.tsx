import { createStand } from '##/stand/standConfig';

import image from './Radar.image.svg';

export default createStand({
  title: 'Radar',
  id: 'Radar',
  group: 'components',
  image,
  description: 'Характеристика по нескольким параметрам.',
  version: '0.6.4',
  status: 'stable',
});
