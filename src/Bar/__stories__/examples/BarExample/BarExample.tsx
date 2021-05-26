import React from 'react'

import { Bar } from '@/Bar'
import { data } from '@/Bar/__mocks__/mock.data'

export function BarExample() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="value"
      yField="month"
      seriesField="name"
    />
  )
}
