import React from 'react'

import { Line } from '@/Line'
import { data as oneLineData } from '@/Line/__mocks__/mock.oneLineData'

export function LineExampleMeta() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={oneLineData}
      xField="Date"
      yField="scales"
      meta={{
        Date: { alias: 'Дата' },
        scales: { alias: 'Число' },
      }}
    />
  )
}
