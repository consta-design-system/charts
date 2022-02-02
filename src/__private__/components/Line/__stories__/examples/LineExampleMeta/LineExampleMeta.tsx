import React from 'react'

import { Line } from '@/__private__/components/Line'
import { data as oneLineData } from '@/__private__/components/Line/__mocks__/mock.oneLineData'

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
