import React from 'react'

import { Area } from '@/__private__/components/Area'
import { colorMapLine, data } from '@/__private__/components/Area/__mocks__/mock.data'
import { data as oneAreaData } from '@/__private__/components/Area/__mocks__/mock.oneLineData'

export function AreaExampleColorLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={oneAreaData}
      xField="Date"
      yField="scales"
      areaStyle={{ stroke: 'red', fill: 'red' }}
      line={{ style: { stroke: 'red' } }}
    />
  )
}

export function AreaExampleColorMultiLine() {
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
