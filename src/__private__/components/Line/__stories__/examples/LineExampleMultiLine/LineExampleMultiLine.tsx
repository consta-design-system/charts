import React from 'react'

import { Line } from '@/__private__/components/Line'
import { data } from '@/__private__/components/Line/__mocks__/mock.data'

export function LineExampleMultiLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      seriesField="country"
    />
  )
}
