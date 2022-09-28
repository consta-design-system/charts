import React from 'react';

import { Area } from '##/components/Area';
import { data } from '##/components/Line/__mocks__/mock.oneLineData';

export function AreaExampleOneLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="Date"
      yField="scales"
    />
  );
}
