import React from 'react'

import { Area } from '@/__private__/components/Area'
import { colorMapLine, data } from '@/__private__/components/Area/__mocks__/mock.data'
import { getLegend } from '@/__private__/utils/legend'

export function AreaExampleMultiLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      seriesField="country"
      color={Object.keys(colorMapLine).map(key => colorMapLine[key])}
    />
  )
}
