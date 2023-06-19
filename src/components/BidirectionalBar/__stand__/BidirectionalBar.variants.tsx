import { useBoolean, useSelect } from '@consta/stand';
import React from 'react';

import { data } from '../__mocks__/mock.data';
import { BidirectionalBar } from '../BidirectionalBar';

export const Variants = () => {
  const direction = useSelect(
    'direction',
    ['vertical', 'horizontal'],
    'vertical',
  );
  const compare = useBoolean('compare', true);

  return (
    <BidirectionalBar
      data={data}
      layout={direction}
      xField="name"
      style={{
        width: '100%',
        height: '100%',
      }}
      renderer="svg"
      yField={['value1', 'value2']}
      xAxis={{
        position: 'bottom',
      }}
      interactions={[
        {
          type: 'active-region',
        },
      ]}
      tooltip={{
        shared: compare,
        showMarkers: false,
      }}
    />
  );
};

export default Variants;
