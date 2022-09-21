import { useBoolean, useNumber, useSelect } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { getLegend } from '##/utils/legend';

import { data, DataType } from '../__mocks__/mock.data';
import { Radar, RadarProps } from '../Radar';

const Variants = () => {
  const vars = useThemeVars();

  const seriesField = useSelect(
    'seriesField',
    ['name', 'star', 'user'],
    'user',
  );
  const dotsSize = useNumber('dotsSize', 0);
  const smooth = useBoolean('smooth', false);
  const round = useBoolean('round', false);
  const withArea = useBoolean('withArea', true);
  const lineDashed = useBoolean('lineDashed', false);

  const colors = {
    'Person 1': vars.color.primary['--color-bg-success'],
    'Person 2': vars.color.primary['--color-bg-normal'],
  };

  const options: RadarProps = {
    data,
    xField: 'name',
    yField: 'star',
    seriesField,
    color: [colors['Person 1'], colors['Person 2']],
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    xAxis: !round
      ? {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        }
      : undefined,
    yAxis: !round
      ? {
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
        }
      : undefined,
    lineStyle: (element: DataType) => {
      return {
        stroke: colors[element.user],
        lineDash: lineDashed ? [10] : [],
      };
    },
    area: withArea
      ? {
          style: (element: DataType) => {
            return {
              fill: colors[element.user],
            };
          },
        }
      : undefined,
    point: {
      size: dotsSize,
    },
    smooth,
    meta: {
      star: {
        min: 0,
        nice: true,
      },
    },
  };

  return (
    <Radar
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      {...options}
    />
  );
};

export default Variants;
