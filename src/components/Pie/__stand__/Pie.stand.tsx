import { createStand } from '##/stand/standConfig';

import image from './Pie.image.svg';

export default createStand({
  title: 'Pie',
  id: 'Pie',
  group: 'components',
  image,
  description: 'Круговая диаграмма.',
  version: '0.6.4',
  status: 'stable',
  figma:
    'https://www.figma.com/embed?embed_host=charts.consta.design&url=https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq?node-id=8252:32932',
});
