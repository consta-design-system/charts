import React from 'react'

import { Bar } from '@/Bar'
import { data } from '@/Bar/__mocks__/mock.data'

export function BarExampleGroup() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', height: 800 }}
      data={data}
      xField="value"
      yField="month"
      seriesField="name"
      isGroup
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
