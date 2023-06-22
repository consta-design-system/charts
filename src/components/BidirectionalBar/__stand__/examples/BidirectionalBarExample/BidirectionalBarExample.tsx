import { Example } from '@consta/stand';
import React from 'react';

import { BidirectionalBar } from '##/components/BidirectionalBar';
import { data } from '##/components/BidirectionalBar/__mocks__/mock.data';

export const BidirectionalBarExample = () => {
  return (
    <Example>
      <BidirectionalBar
        data={data}
        xField="name"
        yField={['value1', 'value2']}
        style={{ height: 500, padding: 'auto', width: '100%' }}
      />
    </Example>
  );
};
