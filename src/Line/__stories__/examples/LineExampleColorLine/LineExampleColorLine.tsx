import React from 'react'

import { Line } from '@/Line'
import { data } from '@/Line/__mocks__/mock.data'
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

const colorMap: { [key: string]: string } = {
  Austria: '#ff7514',
  Canada: '#ad4800',
  France: '#ca3a27',
  Germany: '#470d0b',
  Japan: '#ffc0cb',
  Netherlands: '#ffd88a',
  'New Zealand': '#b39929',
  Spain: '#c5e384',
  Sweden: '#8c4566',
  Switzerland: '#924e7d',
  'United Kingdom': '#905d5d',
  'United States': '#a2a2d0',
}

export function LineExampleColorMultiLine() {
  return (
    <Line
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="year"
      yField="value"
      seriesField="country"
      lineStyle={({ country }) => {
        return {
          stroke: colorMap[country],
        }
      }}
    />
  )
}
