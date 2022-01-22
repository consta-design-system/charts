import React from 'react'

import { Line } from '@/Line'
import { colorMapLine, data } from '@/Line/__mocks__/mock.data'
import { data as oneLineData } from '@/Line/__mocks__/mock.oneLineData'

export function LineExampleColorLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={oneLineData}
      xField="Date"
      yField="scales"
      lineStyle={{ stroke: 'red' }}
    />
  )
}

export function LineExampleColorMultiLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      seriesField="country"
      color={Object.keys(colorMapLine).map(key => colorMapLine[key])}
    />
  )
}
