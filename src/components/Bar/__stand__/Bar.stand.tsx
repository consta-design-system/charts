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
});
