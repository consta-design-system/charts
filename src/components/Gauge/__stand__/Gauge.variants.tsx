import { useBoolean, useNumber, useSelect } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Gauge, GaugeProps } from '../Gauge';

type ColorSignature =
  | '--color-typo-ghost'
  | '--color-typo-primary'
  | '--color-typo-brand'
  | '--color-typo-secondary'
  | '--color-typo-system';

const Variants = () => {
  const percent = useNumber('percent', 0.75);
  const radius = useNumber('radius', 0.75);
  const withFormatter = useBoolean('withFormatter', true);
  const type = useSelect('type', ['default', 'meter'], 'default');
  // const rangeColor = useSelect('rangeColor', ['success', 'warning', 'alert', 'brand'], 'success');
  const statisticColor = useSelect(
    'statisticColor',
    ['ghost', 'primary', 'brand', 'secondary', 'system'],
    'primary',
  );

  const customFormatter = (
    data: Record<string, number> | undefined,
  ): string => {
    return data && typeof data.percent === 'number'
      ? `${(Number(data.percent) * 100).toFixed(0)}%`
      : '';
  };

  const vars = useThemeVars();

  const options: GaugeProps = {
    percent,
    radius,
    type,
    gaugeStyle: {
      lineCap: 'round',
    },
    range: {
      color: [
        // vars.color.primary[`--color-bg-${rangeColor}` as ColorSignature],
        // vars.color.primary['--color-bg-ghost'],
      ],
    },
    statistic: {
      content: {
        formatter: withFormatter ? customFormatter : undefined,
        style: {
          color:
            vars.color.primary[
              `--color-typo-${statisticColor}` as ColorSignature
            ],
          fontSize: '24px',
          fontWeight: 'bold',
        },
      },
    },
    axis: {
      subTickLine: {
        count: 3,
        length: -8,
        style: {
          stroke: vars.color.primary['--color-control-bg-border-default'],
        },
      },
      tickLine: {
        length: -12,
        style: {
          stroke: vars.color.primary['--color-control-bg-border-default'],
        },
      },
      label: {
        style: {
          fontSize: 12,
        },
      },
    },
    indicator: {
      pin: {
        style: {
          r: 9,
          stroke: vars.color.primary['--color-control-bg-border-default'],
          lineWidth: 4,
          fill: vars.color.primary['--color-bg-default'],
        },
      },
      pointer: {
        style: {
          stroke: vars.color.primary['--color-control-bg-border-default'],
          lineWidth: 4,
        },
      },
    },
  };

  return (
    <Gauge
      style={{
        width: 300,
        height: '100%',
      }}
      {...options}
    />
  );
};

export default Variants;
