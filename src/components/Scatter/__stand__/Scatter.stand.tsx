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
});
