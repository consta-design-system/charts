import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Gauge } from '@/Gauge'

export const GaugeExampleIndicator = () => {
  const vars = useThemeVars()

  const options = {
    percent: 0.75,
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
          stroke: vars.color.primary['--color-bg-alert'],
          lineWidth: 6,
        },
      },
    },
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} style={{ height: '140px' }} />
}
