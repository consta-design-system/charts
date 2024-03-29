import { useNumber, useSelect } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { data } from '../__mocks__/data.mock';
import { Scatter } from '../Scatter';

type ColorSignature =
  | '--color-bg-success'
  | '--color-bg-warning'
  | '--color-bg-alert'
  | '--color-bg-brand';

const Variants = () => {
  const type = useSelect('type', ['jitter', 'stack', 'symmetric'], 'jitter');
  const size = useNumber('size', 5);
  const color = useSelect(
    'color',
    ['success', 'warning', 'alert', 'brand'],
    'brand',
  );
  const shape = useSelect(
    'shape',
    [
      'circle',
      'square',
      'bowtie',
      'diamond',
      'hexagon',
      'triangle',
      'triangle-down',
      'hollow-circle',
      'hollow-square',
      'hollow-bowtie',
      'hollow-diamond',
      'hollow-hexagon',
      'hollow-triangle',
      'hollow-triangle-down',
      'cross',
      'tick',
      'plus',
      'hyphen',
      'line',
    ],
    'circle',
  );

  const vars = useThemeVars();

  return (
    <Scatter
      style={{
        width: '100%',
        height: '100%',
      }}
      type={type}
      data={data}
      size={size}
      color={vars.color.primary[`--color-bg-${color}` as ColorSignature]}
      shape={shape}
      xField="x"
      yField="y"
      xAxis={{
        grid: {
          line: {
            style: {
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
        line: {
          style: {
            stroke: vars.color.primary['--color-bg-system'],
          },
        },
      }}
    />
  );
};

export default Variants;
