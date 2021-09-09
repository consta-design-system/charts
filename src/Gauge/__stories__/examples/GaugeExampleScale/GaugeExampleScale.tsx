import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Gauge } from '@/Gauge'

export const GaugeExampleColor = () => {
  const vars = useThemeVars()

  const options = {
    percent: 0.75,
    range: {
      color: vars.color.primary['--color-bg-success'],
    },
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} style={{ height: '140px' }} />
}

export const GaugeExampleScale = () => {
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
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} style={{ height: '140px' }} />
}
