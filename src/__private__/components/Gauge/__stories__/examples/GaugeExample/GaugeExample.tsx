import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Gauge, GaugeProps } from '@/__private__/components/Gauge'

export const GaugeExampleSimple = () => {
  const options = {
    percent: 0.75,
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} style={{ height: '140px' }} />
}

export const GaugeExample = () => {
  const customFormatter = (data: Record<string, number> | undefined): string => {
    return data && typeof data.percent === 'number'
      ? `${(Number(data.percent) * 100).toFixed(0)}%`
      : ''
  }

  const vars = useThemeVars()

  const options: GaugeProps = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: [vars.color.primary['--color-bg-success'], vars.color.primary['--color-bg-ghost']],
    },
    gaugeStyle: {
      lineCap: 'round',
    },
    statistic: {
      content: {
        formatter: customFormatter,
        style: {
          color: vars.color.primary['--color-typo-primary'],
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
  }

  return <Gauge {...options} />
}
