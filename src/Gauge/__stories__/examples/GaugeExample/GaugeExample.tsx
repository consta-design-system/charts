import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Gauge } from '@/Gauge'

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

  const options = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: vars.color.primary['--color-bg-success'],
    },
    statistic: {
      content: {
        formatter: customFormatter,
        style: {
          color: vars.color.primary['--color-bg-default'],
          fontSize: '54px',
          fontWeight: 'bold',
        },
      },
    },
    axis: {
      subTickLine: {
        count: 3,
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
          r: 16,
          stroke: vars.color.primary['--color-bg-border'],
          lineWidth: 6,
        },
      },
      pointer: {
        style: {
          stroke: vars.color.primary['--color-bg-border'],
          lineWidth: 6,
        },
      },
    },
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} />
}
