import React from 'react'

import { DualAxes } from '@/DualAxes'
import { data } from '@/DualAxes/__mocks__/mock.data'

export function DualAxesExampleDualLine() {
  return (
    <DualAxes
      style={{ marginBottom: 'var(--space-m)' }}
      data={[data, data]}
      xField="year"
      yField={['value', 'count']}
    />
  )
}
