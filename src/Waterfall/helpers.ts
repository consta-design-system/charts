import { ThemeVars } from '@consta/uikit/useThemeVars'

import { WaterfallProps } from './Waterfall'

export const getDefaultProps = (props: WaterfallProps, vars: ThemeVars): WaterfallProps => {
  return {
    ...props,
    leaderLine: {
      style: {
        lineWidth: 1,
        stroke: vars.color.primary['--color-bg-border'],
        lineDash: [4, 2],
      },
      ...props.leaderLine,
    },
    total: {
      label: 'total',
      style: {
        fill: vars.color.primary['--color-bg-normal'],
      },
      ...props.total,
    },
    risingFill: vars.color.primary['--color-bg-success'],
    fallingFill: vars.color.primary['--color-bg-alert'],
    legend: {
      items: [
        {
          name: 'increase',
          value: 'increase',
          marker: {
            symbol: 'circle',
            style: {
              r: 5,
              fill: vars.color.primary['--color-bg-success'],
            },
          },
        },
        {
          name: 'decrease',
          value: 'decrease',
          marker: {
            symbol: 'circle',
            style: {
              r: 5,
              fill: vars.color.primary['--color-bg-alert'],
            },
          },
        },
        {
          name: 'total',
          value: 'total',
          marker: {
            symbol: 'circle',
            style: {
              r: 5,
              fill: vars.color.primary['--color-bg-normal'],
            },
          },
        },
      ],
      ...props.legend,
    },
  }
}
