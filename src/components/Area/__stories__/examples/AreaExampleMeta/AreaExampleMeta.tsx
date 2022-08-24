import React from 'react';

import { Area } from '##/components/Area';
import { data } from '##/components/Line/__mocks__/mock.oneLineData';

export function AreaExampleMeta() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="Date"
      yField="scales"
      meta={{
        Date: { alias: 'Дата' },
        scales: { alias: 'Число' },
      }}
    />
  );
}
