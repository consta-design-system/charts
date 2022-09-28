import React from 'react';

import { Line } from '##/components/Line';
import { data as oneLineData } from '##/components/Line/__mocks__/mock.oneLineData';
import { getLegend } from '##/utils/legend';

export function LineExampleMeta() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={oneLineData}
      xField="Date"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      yField="scales"
      meta={{
        Date: { alias: 'Дата' },
        scales: { alias: 'Число' },
      }}
    />
  );
}
