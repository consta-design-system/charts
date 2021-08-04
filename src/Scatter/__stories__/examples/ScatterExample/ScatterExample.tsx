import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { data, dataSimple } from '../../../__mocks__/bigData.mock'
import { Scatter } from '../../../Scatter'

export function ScatterExample() {
  const vars = useThemeVars()
  return (
    <Scatter
      data={data}
      xField="change in female rate"
      appendPadding={30}
      yField="change in male rate"
      sizeField="pop"
      size={[4, 30]}
      shape="circle"
      colorField="continent"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      meta={{
        pop: { alias: 'население' },
        'change in female rate': { alias: 'занятость женщин' },
        'change in male rate': { alias: 'занятость мужчин' },
        continent: { alias: 'континент' },
      }}
      pointStyle={{
        fillOpacity: 0.6,
        stroke: null,
      }}
      xAxis={{
        grid: {
          line: {
            style: {
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
        line: {
          style: {
            stroke: vars.color.primary['--color-bg-system'],
          },
        },
      }}
    />
  )
}

export function ScatterExampleSimple() {
  const vars = useThemeVars()
  return (
    <Scatter
      data={dataSimple}
      xField="year"
      yField="value"
      sizeField="color"
      size={[4, 30]}
      shape="circle"
      colorField="country"
      meta={{
        year: {
          alias: 'год',
          range: [0, 1],
        },
        value: {
          alias: 'значение',
          formatter: v => {
            return `${v}`
          },
        },
      }}
      pointStyle={{
        fillOpacity: 0.6,
        stroke: null,
      }}
      xAxis={{
        grid: {
          line: {
            style: {
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
        line: {
          style: {
            stroke: vars.color.primary['--color-bg-system'],
          },
        },
      }}
    />
  )
}
