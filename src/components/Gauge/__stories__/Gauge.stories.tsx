import { useThemeVars } from '@consta/uikit/useThemeVars';
import { boolean, number, select } from '@storybook/addon-knobs';
import React from 'react';

import { createMetadata } from '##/storybook';

import { Gauge, GaugeProps } from '../Gauge';
import mdx from './Gauge.docs.mdx';

const getKnobs = () => ({
  percent: number('percent', 0.75),
  radius: number('radius', 0.75),
  withFormatter: boolean('withFormatter', true),
  type: select('type', ['default', 'meter'], 'default'),
  rangeColor: select(
    'rangeColor',
    ['success', 'warning', 'alert', 'brand'],
    'success',
  ),
  statisticColor: select(
    'statisticColor',
    ['ghost', 'primary', 'brand', 'secondary', 'system'],
    'primary',
  ),
});

type ColorSignature =
  | '--color-typo-ghost'
  | '--color-typo-primary'
  | '--color-typo-brand'
  | '--color-typo-secondary'
  | '--color-typo-system';

const Default = () => {
  const { percent, rangeColor, statisticColor, withFormatter, radius, type } =
    getKnobs();
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
        vars.color.primary[`--color-bg-${rangeColor}` as ColorSignature],
        vars.color.primary['--color-bg-ghost'],
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

export function Playground() {
  return <Default />;
}

export default createMetadata({
  title: 'Компоненты|/Gauge',
  id: 'components/Gauge',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3852%3A230',
    },
  },
});
