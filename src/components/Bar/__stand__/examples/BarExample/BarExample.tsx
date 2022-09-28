import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Bar } from '##/components/Bar';
import { data, dataSimple } from '##/components/Bar/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function BarExample() {
  const vars = useThemeVars();

  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="value"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      color={[
        vars.color.primary['--color-bg-normal'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-success'],
      ]}
      yField="month"
      seriesField="name"
      isStack
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  );
}

export function BarExampleSimple() {
  const vars = useThemeVars();

  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', maxWidth: 300, maxHeight: 200 }}
      data={dataSimple}
      color={vars.color.primary['--color-bg-normal']}
      xField="number"
      yField="parameter"
    />
  );
}

export function BarExampleSeriesField() {
  const vars = useThemeVars();

  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', maxWidth: 400, maxHeight: 200 }}
      data={dataSimple}
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      xField="number"
      yField="parameter"
      color={vars.color.primary['--color-bg-normal']}
      seriesField="parameter"
    />
  );
}

export function BarExampleLabel() {
  const vars = useThemeVars();

  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', maxWidth: 300, maxHeight: 200 }}
      data={dataSimple}
      color={vars.color.primary['--color-bg-normal']}
      xField="number"
      yField="parameter"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  );
}
