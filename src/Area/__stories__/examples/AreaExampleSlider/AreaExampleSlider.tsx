import React from 'react'

import { Area } from '@/Area'
import { data } from '@/Area/__mocks__/mock.data'

export function AreaExampleSlider() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="year"
      yField="value"
      seriesField="country"
      slider={{
        start: 0,
        end: 0.5,
      }}
    />
  )
}
