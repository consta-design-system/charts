import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { DualAxes } from '##/components/DualAxes';
import { getLegend } from '##/utils/legend';

const uvBillData = [
  { time: '2019-03', value: 350, type: 'uv' },
  { time: '2019-04', value: 900, type: 'uv' },
  { time: '2019-05', value: 300, type: 'uv' },
  { time: '2019-06', value: 450, type: 'uv' },
  { time: '2019-07', value: 470, type: 'uv' },
  { time: '2019-03', value: 220, type: 'bill' },
  { time: '2019-04', value: 300, type: 'bill' },
  { time: '2019-05', value: 250, type: 'bill' },
  { time: '2019-06', value: 220, type: 'bill' },
  { time: '2019-07', value: 362, type: 'bill' },
];

const transformData = [
  { time: '2019-03', count: 800 },
  { time: '2019-04', count: 600 },
  { time: '2019-05', count: 400 },
  { time: '2019-06', count: 380 },
  { time: '2019-07', count: 220 },
];

export function DualAxesExampleStackedColumnLine() {
  const vars = useThemeVars();

  return (
    <DualAxes
      style={{ marginBottom: 'var(--space-m)' }}
      data={[uvBillData, transformData]}
      renderer="svg"
      xField="time"
      yField={['value', 'count']}
      geometryOptions={[
        {
          geometry: 'column',
          isStack: true,
          color: [
            vars.color.primary['--color-bg-normal'],
            vars.color.primary['--color-bg-warning'],
          ],
          seriesField: 'type',
          legend: getLegend({ layout: 'horizontal', position: 'top-right' }),
        },
        {
          color: vars.color.primary['--color-bg-success'],
          geometry: 'line',
        },
      ]}
    />
  );
}
