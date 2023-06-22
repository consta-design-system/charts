import { Example } from '@consta/stand';
import React from 'react';

import { BidirectionalBar } from '##/components/BidirectionalBar';
import { data } from '##/components/BidirectionalBar/__mocks__/mock.data';

type Direction = 'vertical' | 'horizontal';

const directions: Direction[] = ['vertical', 'horizontal'];

export const BidirectionalBarLayoutExample = () => {
  return (
    <Example
      items={directions}
      getItemLabel={(item) => item}
      col={{
        1: 0,
      }}
      getItemNode={(layout: Direction) => (
        <BidirectionalBar
          data={data}
          xField="name"
          layout={layout}
          yField={['value1', 'value2']}
          style={{ height: 500, padding: 'auto' }}
        />
      )}
    />
  );
};
