import React from 'react'

import { Line } from '@/__private__/components/Line'
import { data } from '@/__private__/components/Line/__mocks__/mock.oneLineData'

export function LineExampleOneLine() {
  return (
    <Line style={{ marginBottom: 'var(--space-m)' }} data={data} xField="Date" yField="scales" />
  )
}
