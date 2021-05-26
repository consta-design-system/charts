import React from 'react'

import { Area } from '@/Area'
import { data } from '@/Line/__mocks__/mock.oneLineData'

export function AreaExampleOneLine() {
  return (
    <Area style={{ marginBottom: 'var(--space-m)' }} data={data} xField="Date" yField="scales" />
  )
}
