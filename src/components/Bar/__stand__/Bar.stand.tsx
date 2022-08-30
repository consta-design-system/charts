import { createStand } from '##/stand/standConfig';

import image from './Bar.image.svg';

export default createStand({
  title: 'Bar',
  id: 'Bar',
  group: 'components',
  image,
  description: 'Горизонтальная столбчатая диаграмма.',
  version: '0.6.4',
  status: 'stable',
  figma:
    'https://www.figma.com/embed?embed_host=charts.consta.design&url=https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq?node-id=8243:31333',
});
