import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { DualAxes } from '@/DualAxes'
import { data } from '@/DualAxes/__mocks__/mock.data'

export function DualAxesExampleDualLineWithStyle() {
  const vars = useThemeVars()
  return (
    <DualAxes
      style={{ marginBottom: 'var(--space-m)' }}
      data={[data, data]}
      xField="year"
      yField={['value', 'count']}
      geometryOptions={[
        {
          geometry: 'line',
          smooth: false,
          color: vars.color.primary['--color-bg-brand'],
          label: {
            formatter: datum => {
              return `${datum.value}`
            },
          },
          lineStyle: {
            lineWidth: 2,
            lineDash: [5, 5],
          },
        },
        {
          geometry: 'line',
          smooth: true,
          color: vars.color.primary['--color-typo-success'],
          lineStyle: {
            lineWidth: 2,
          },
          label: {
            formatter: datum => {
              return `${datum.count}`
            },
          },
          point: {
            shape: 'circle',
            size: 4,
            style: {
              stroke: vars.color.primary['--color-typo-success'],
              fill: vars.color.primary['--color-bg-default'],
            },
          },
        },
      ]}
    />
  )
}
