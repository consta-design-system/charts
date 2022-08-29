import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { data } from '../../../__mocks__/data.mock';
import { Waterfall } from '../../../Waterfall';

export function WaterfallExample() {
  const vars = useThemeVars();
  return (
    <Waterfall
      style={{ marginBottom: 'var(--space-xl)' }}
      data={data}
      xField="type"
      yField="money"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      risingFill={vars.color.primary['--color-bg-success']}
      fallingFill={vars.color.primary['--color-bg-alert']}
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
}

export function WaterfallExampleColor() {
  const vars = useThemeVars();
  return (
    <Waterfall
      style={{ marginBottom: 'var(--space-xl)' }}
      data={data}
      xField="type"
      yField="money"
      risingFill={vars.color.primary['--color-bg-success']}
      fallingFill={vars.color.primary['--color-bg-alert']}
      total={{
        style: {
          fill: vars.color.primary['--color-bg-system'],
        },
      }}
    />
  );
}

export function WaterfallExampleSimple() {
  return (
    <Waterfall
      style={{ marginBottom: 'var(--space-xl)' }}
      data={data}
      xField="type"
      yField="money"
    />
  );
}

export function WaterfallExampleLegend() {
  const vars = useThemeVars();
  return (
    <Waterfall
      style={{ marginBottom: 'var(--space-xl)' }}
      data={data}
      xField="type"
      yField="money"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      risingFill={vars.color.primary['--color-bg-success']}
      fallingFill={vars.color.primary['--color-bg-alert']}
      total={{
        style: {
          fill: vars.color.primary['--color-bg-system'],
        },
      }}
    />
  );
}

export function WaterfallExampleMeta() {
  const vars = useThemeVars();
  return (
    <Waterfall
      style={{ marginBottom: 'var(--space-xl)' }}
      data={data}
      xField="type"
      yField="money"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      risingFill={vars.color.primary['--color-bg-success']}
      fallingFill={vars.color.primary['--color-bg-alert']}
      total={{
        style: {
          fill: vars.color.primary['--color-bg-system'],
        },
        label: 'Всего',
      }}
      meta={{
        money: {
          alias: 'На счете',
          formatter: (v) => {
            return `${v} ₽`;
          },
        },
      }}
    />
  );
}
