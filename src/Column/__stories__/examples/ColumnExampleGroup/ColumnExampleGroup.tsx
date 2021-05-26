import React from 'react'

import { Column } from '@/Column'
import { data } from '@/Column/__mocks__/mock.data'

export function ColumnExampleGroup() {
  return (
    <Column
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="month"
      yField="value"
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
