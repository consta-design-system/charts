import React from 'react'

import { Bar } from '@/Bar'
import { data, dataSimple } from '@/Bar/__mocks__/mock.data'

export function BarExample() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="value"
      yField="month"
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

export function BarExampleSimple() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', maxWidth: 300, maxHeight: 200 }}
      data={dataSimple}
      xField="number"
      yField="parameter"
    />
  )
}

export function BarExampleSeriesField() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', maxWidth: 400, maxHeight: 200 }}
      data={dataSimple}
      xField="number"
      yField="parameter"
      seriesField="parameter"
    />
  )
}

export function BarExampleLabel() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', maxWidth: 300, maxHeight: 200 }}
      data={dataSimple}
      xField="number"
      yField="parameter"
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
