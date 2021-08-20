import React from 'react'

import { Column } from '@/Column'
import { data, dataSimple } from '@/Column/__mocks__/mock.data'

export function ColumnExample() {
  return (
    <Column
      data={data}
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
  return (
    <Column
      style={{ marginBottom: 'var(--space-m)', maxWidth: 500, maxHeight: 200 }}
      data={dataSimple}
      xField="parameter"
      yField="number"
    />
  )
}

export function ColumnExampleSeriesField() {
  return (
    <Column
      style={{ marginBottom: 'var(--space-m)', maxWidth: 400, maxHeight: 200 }}
      data={dataSimple}
      xField="parameter"
      yField="number"
      seriesField="parameter"
    />
  )
}

export function ColumnExampleLabel() {
  return (
    <Column
      style={{ marginBottom: 'var(--space-m)', maxWidth: 300, maxHeight: 200 }}
      data={dataSimple}
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
