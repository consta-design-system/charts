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
  figma:
    'https://www.figma.com/embed?embed_host=charts.consta.design&url=https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq?node-id=3852:0',
});
