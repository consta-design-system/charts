import React from 'react'

import { Line } from '@/Line'
import { data } from '@/Line/__mocks__/mock.data'

export function LineExampleMultiLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="year"
      yField="value"
      seriesField="country"
    />
  )
}
