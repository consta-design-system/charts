import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { data, dataColor, dataSimple } from '../../../__mocks__/bigData.mock'
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
      style={{ marginBottom: 'var(--space-m)', width: 300, height: 200 }}
      data={dataSimple}
      xField="x"
      yField="y"
    />
  )
}

export function ScatterExampleColor() {
  const vars = useThemeVars()
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-m)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
    />
  )
}

export function ScatterExampleSize() {
  const vars = useThemeVars()
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-m)', width: 200, height: 100 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      sizeField="ufo"
      size={8}
      pointStyle={{
        fill: '#5B8FF9',
      }}
      meta={{
        temperature: { alias: 'градусы' },
        ufo: { alias: 'НЛО' },
        place: { alias: 'где' },
      }}
    />
  )
}
