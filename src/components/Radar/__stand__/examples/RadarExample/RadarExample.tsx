import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Radar, RadarProps } from '##/components/Radar';
import { data } from '##/components/Radar/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function RadarExample() {
  const vars = useThemeVars();

  const colors: Record<string, string> = {
    'Person 1': vars.color.primary['--color-bg-success'],
    'Person 2': vars.color.primary['--color-bg-normal'],
  };

  const options: RadarProps = {
    data,
    xField: 'name',
    yField: 'star',
    color: Object.keys(colors).map((key) => colors[key]),
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    renderer: 'svg',
    seriesField: 'user',
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
      },
    },
    area: {},
    point: {
      size: 2,
    },
    smooth: false,
    meta: {
      star: {
        min: 0,
        nice: true,
      },
    },
  };

  return <Radar {...options} />;
}
