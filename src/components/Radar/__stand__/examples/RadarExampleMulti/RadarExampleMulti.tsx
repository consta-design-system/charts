import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Radar, RadarProps } from '##/components/Radar';
import { dataMulti as data } from '##/components/Radar/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

type ColorMap = Record<string, string>;

export function RadarExampleMulti() {
  const vars = useThemeVars();

  const colors: ColorMap = {
    'Винни-Пух': vars.color.primary['--color-bg-success'],
    'Пятачок': vars.color.primary['--color-bg-normal'],
  };

  const options: RadarProps = {
    data,
    color: Object.keys(colors).map((key) => colors[key]),
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    renderer: 'svg',
    xField: 'skill',
    yField: 'star',
    seriesField: 'person',
    style: {
      width: 800,
    },
  };

  return <Radar {...options} />;
}

export function RadarExampleArea() {
  const vars = useThemeVars();

  const colors: ColorMap = {
    'Винни-Пух': vars.color.primary['--color-bg-success'],
    'Пятачок': vars.color.primary['--color-bg-normal'],
  };

  const options: RadarProps = {
    data,
    color: Object.keys(colors).map((key) => colors[key]),
    xField: 'skill',
    yField: 'star',
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    renderer: 'svg',
    seriesField: 'person',
    area: {},
    point: {
      size: 2,
    },
    style: {
      width: 800,
    },
  };

  return <Radar {...options} />;
}

export function RadarExampleAxis() {
  const vars = useThemeVars();

  const colors: ColorMap = {
    'Винни-Пух': vars.color.primary['--color-bg-success'],
    'Пятачок': vars.color.primary['--color-bg-normal'],
  };

  const options: RadarProps = {
    data,
    xField: 'skill',
    yField: 'star',
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    renderer: 'svg',
    color: Object.keys(colors).map((key) => colors[key]),
    seriesField: 'person',
    style: {
      width: 800,
    },
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
