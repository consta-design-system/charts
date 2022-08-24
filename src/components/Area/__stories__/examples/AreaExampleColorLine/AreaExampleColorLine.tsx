import React from 'react';

import { Area } from '##/components/Area';
import { colorMapLine, data } from '##/components/Area/__mocks__/mock.data';
import { data as oneAreaData } from '##/components/Area/__mocks__/mock.oneLineData';
import { getLegend } from '##/utils/legend';

export function AreaExampleColorLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={oneAreaData}
      xField="Date"
      yField="scales"
      areaStyle={{ stroke: 'red', fill: 'red' }}
      line={{ style: { stroke: 'red' } }}
    />
  );
}

export function AreaExampleColorMultiLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      xField="date"
      yField="value"
      seriesField="country"
      color={Object.keys(colorMapLine).map((key) => colorMapLine[key])}
    />
  );
}
