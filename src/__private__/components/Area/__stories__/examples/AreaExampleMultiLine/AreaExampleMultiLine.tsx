import React from 'react'

import { Area } from '@/__private__/components/Area'
import { colorMapLine, data } from '@/__private__/components/Area/__mocks__/mock.data'

export function AreaExampleMultiLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      seriesField="country"
      color={Object.keys(colorMapLine).map(key => colorMapLine[key])}
    />
  )
}
