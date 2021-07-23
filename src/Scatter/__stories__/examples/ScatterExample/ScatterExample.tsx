import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { data } from '../../../__mocks__/bigData.mock'
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
