import React from 'react';

import { Line } from '##/components/Line';
import { colorMapLine, data } from '##/components/Line/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function LineExampleMultiLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      legend={getLegend({
        layout: 'horizontal',
        position: 'top-left',
        colors: colorMapLine,
      })}
      renderer="svg"
      yField="value"
      seriesField="country"
      color={({ country }) => {
        return colorMapLine[country];
      }}
    />
  );
}
