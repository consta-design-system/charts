import React from 'react'

import { Column } from '@/Column'
import { data } from '@/Column/__mocks__/mock.data'

export function ColumnExample() {
  return (
    <Column
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="month"
      yField="value"
      seriesField="name"
    />
  )
}
