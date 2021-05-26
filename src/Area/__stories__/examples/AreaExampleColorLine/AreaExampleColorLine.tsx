import React from 'react'

import { Area } from '@/Area'
import { data } from '@/Area/__mocks__/mock.data'
import { data as oneAreaData } from '@/Area/__mocks__/mock.oneLineData'

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

export function AreaExampleColorMultiLine() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="year"
      yField="value"
      seriesField="country"
      areaStyle={({ country }) => {
        return {
          stroke: colorMap[country],
          fill: colorMap[country],
        }
      }}
      line={{
        style: ({ country }) => {
          return {
            stroke: colorMap[country],
          }
        },
      }}
    />
  )
}
