import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Column } from '@/__private__/components/Column'
import { data, dataSimple } from '@/__private__/components/Column/__mocks__/mock.data'

export function ColumnExample() {
  const vars = useThemeVars()

  return (
    <Column
      data={data}
      color={[
        vars.color.primary['--color-bg-normal'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-success'],
      ]}
      xField="month"
      yField="value"
      seriesField="name"
      isStack
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  )
}

export function ColumnExampleSimple() {
  const vars = useThemeVars()

  return (
    <Column
      style={{ marginBottom: 'var(--space-m)', maxWidth: 500, maxHeight: 200 }}
      data={dataSimple}
      color={vars.color.primary['--color-bg-normal']}
      xField="parameter"
      yField="number"
    />
  )
}

export function ColumnExampleSeriesField() {
  const vars = useThemeVars()

  return (
    <Column
      style={{ marginBottom: 'var(--space-m)', maxWidth: 400, maxHeight: 200 }}
      data={dataSimple}
      color={vars.color.primary['--color-bg-normal']}
      xField="parameter"
      yField="number"
      seriesField="parameter"
    />
  )
}

export function ColumnExampleLabel() {
  const vars = useThemeVars()

  return (
    <Column
      style={{ marginBottom: 'var(--space-m)', maxWidth: 300, maxHeight: 200 }}
      data={dataSimple}
      color={vars.color.primary['--color-bg-normal']}
      xField="parameter"
      yField="number"
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  )
}
