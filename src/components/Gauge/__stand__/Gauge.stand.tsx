import { createStand } from '##/stand/standConfig';

import image from './Gauge.image.svg';

export default createStand({
  title: 'Gauge',
  id: 'Gauge',
  group: 'components',
  image,
  description: 'Круговая шкала.',
  version: '0.6.4',
  status: 'stable',
});
