import React from 'react'

import { Line } from '@/Line'
import { data } from '@/Line/__mocks__/mock.oneLineData'

export function LineExampleOneLine() {
  return (
    <Line style={{ marginBottom: 'var(--space-m)' }} data={data} xField="Date" yField="scales" />
  )
}
