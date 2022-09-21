import { useNumber, useSelect } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/data.mock';
import { Waterfall } from '../Waterfall';

// type ColorSignature =
//   | '--color-bg-success'
//   | '--color-bg-warning'
//   | '--color-bg-alert'
//   | '--color-bg-brand'

const Variants = () => {
  // const risingFill = useSelect('risingFill', ['success', 'warning', 'alert', 'brand'], 'success');
  // const fallingFill = useSelect('fallingFill', ['success', 'warning', 'alert', 'brand'], 'alert');
  const columnWidthRatio = useNumber('columnWidthRatio', 0.5);
  const labelMode = useSelect(
    'labelMode',
    ['absolute', 'difference'],
    'difference',
  );

  const vars = useThemeVars();

  return (
    <Waterfall
      style={{
        width: 800,
        height: '100%',
      }}
      data={data}
      labelMode={labelMode}
      xField="type"
      columnWidthRatio={columnWidthRatio}
      yField="money"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      // risingFill={vars.color.primary[`--color-bg-${risingFill}` as ColorSignature]}
      // fallingFill={vars.color.primary[`--color-bg-${fallingFill}` as ColorSignature]}
      total={{
        style: {
          fill: vars.color.primary['--color-bg-system'],
        },
      }}
      yAxis={{
        grid: {
          line: {
            style: {
              lineDash: null,
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
      }}
    />
  );
};

export default Variants;
