import { createStand } from '##/stand/standConfig';

import image from './Scatter.image.svg';

export default createStand({
  title: 'Scatter',
  id: 'Scatter',
  group: 'components',
  image,
  description: 'Диаграмма рассеяния или точечная диаграмма.',
  version: '0.6.4',
  status: 'stable',
  figma:
    'https://www.figma.com/embed?embed_host=charts.consta.design&url=https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq?node-id=8410:38643',
});
