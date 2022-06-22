import React from 'react'

import { Line } from '@/__private__/components/Line'
import { colorMapLine, data } from '@/__private__/components/Line/__mocks__/mock.data'
import { data as oneLineData } from '@/__private__/components/Line/__mocks__/mock.oneLineData'
import { getLegend } from '@/__private__/utils/legend'

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
      legend={getLegend({
        layout: 'horizontal',
        position: 'top-left',
        colors: colorMapLine,
      })}
      renderer="svg"
      yField="value"
      seriesField="country"
      color={({ country }) => {
        return colorMapLine[country]
      }}
    />
  )
}
