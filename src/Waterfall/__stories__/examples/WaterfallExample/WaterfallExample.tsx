import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { data } from '../../../__mocks__/data.mock'
import { Waterfall } from '../../../Waterfall'

export function WaterfallExample() {
  const vars = useThemeVars()
  return (
    <Waterfall
      data={data}
      xField="type"
      yField="money"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      risingFill={vars.color.primary['--color-bg-success']}
      fallingFill={vars.color.primary['--color-bg-alert']}
      total={{
        style: {
          fill: vars.color.primary['--color-bg-system'],
        },
      }}
      yAxis={{
        grid: {
          line: {
            style: {
              lineDash: null,
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
      }}
    />
  )
}
