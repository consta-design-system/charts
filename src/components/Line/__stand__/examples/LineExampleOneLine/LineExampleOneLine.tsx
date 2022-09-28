import React from 'react';

import { Line } from '##/components/Line';
import { data } from '##/components/Line/__mocks__/mock.oneLineData';

export function LineExampleOneLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="Date"
      yField="scales"
    />
  );
}
