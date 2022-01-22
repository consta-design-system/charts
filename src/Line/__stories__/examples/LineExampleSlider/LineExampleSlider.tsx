import React from 'react'

import { Line } from '@/Line'
import { data } from '@/Line/__mocks__/mock.data'

export function LineExampleSlider() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      seriesField="country"
      slider={{
        start: 0.1,
        end: 0.5,
      }}
    />
  )
}
