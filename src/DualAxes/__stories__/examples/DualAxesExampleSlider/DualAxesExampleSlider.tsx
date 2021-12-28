import React from 'react'

import { DualAxes } from '@/DualAxes'
import { data } from '@/DualAxes/__mocks__/mock.data'

export function DualAxesExampleSlider() {
  return (
    <DualAxes
      style={{ marginBottom: 'var(--space-m)' }}
      data={[data, data]}
      xField="year"
      slider={{
        start: 0,
        end: 0.5,
      }}
      yField={['value', 'count']}
    />
  )
}
