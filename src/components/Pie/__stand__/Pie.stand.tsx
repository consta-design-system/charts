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
});
