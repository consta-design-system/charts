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
});
