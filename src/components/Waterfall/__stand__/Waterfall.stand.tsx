import { createStand } from '##/stand/standConfig';

import image from './Waterfall.image.svg';

export default createStand({
  title: 'Waterfall',
  id: 'Waterfall',
  group: 'components',
  image,
  description: 'Каскадная диаграмма.',
  version: '0.6.4',
  status: 'stable',
  figma:
    'https://www.figma.com/embed?embed_host=charts.consta.design&url=https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq?node-id=3847:11645',
});
