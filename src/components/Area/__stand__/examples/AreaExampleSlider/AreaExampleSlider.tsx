import React from 'react';

import { Area } from '##/components/Area';
import { colorMapLine, data } from '##/components/Area/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function AreaExampleSlider() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      seriesField="country"
      color={Object.keys(colorMapLine).map((key) => colorMapLine[key])}
      slider={{
        start: 0,
        end: 0.5,
      }}
    />
  );
}
