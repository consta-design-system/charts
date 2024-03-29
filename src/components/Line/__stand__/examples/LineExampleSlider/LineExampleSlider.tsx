import React from 'react';

import { Line } from '##/components/Line';
import { colorMapLine, data } from '##/components/Line/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function LineExampleSlider() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      legend={getLegend({
        layout: 'horizontal',
        position: 'top-left',
        colors: colorMapLine,
      })}
      color={({ country }) => {
        return colorMapLine[country];
      }}
      renderer="svg"
      seriesField="country"
      slider={{
        start: 0.1,
        end: 0.5,
      }}
    />
  );
}
