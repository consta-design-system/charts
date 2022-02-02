import React from 'react'

import { Area } from '@/__private__/components/Area'
import { data } from '@/__private__/components/Line/__mocks__/mock.oneLineData'

export function AreaExampleOneLine() {
  return (
    <Area style={{ marginBottom: 'var(--space-m)' }} data={data} xField="Date" yField="scales" />
  )
}
