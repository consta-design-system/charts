import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Gauge } from '@/Gauge'

export const GaugeExampleStatistic = () => {
  const customFormatter = (data: Record<string, number> | undefined): string => {
    return data && typeof data.percent === 'number'
      ? `${(Number(data.percent) * 100).toFixed(0)}%`
      : ''
  }

  const vars = useThemeVars()

  const options = {
    percent: 0.75,
    range: {
      color: vars.color.primary['--color-bg-success'],
    },
    axis: {
      label: {
        formatter: (v: string) => Number(v) * 100,
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: customFormatter,
        style: {
          color: vars.color.primary['--color-bg-tone'],
        },
      },
    },
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} style={{ height: '300px' }} />
}
