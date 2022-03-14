import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Line } from '@/__private__/components/Line'
import { colorMapLine, data } from '@/__private__/components/Line/__mocks__/mock.data'
import { useSlider } from '@/__private__/hooks/useSlider/useSlider'
import { getLegend } from '@/__private__/utils/legend'

const sliderCfg = {
  start: 0.1,
  end: 0.6,
  trendCfg: {
    smooth: true,
  },
}

export function UseSliderExample() {
  const newData = data.map(item => {
    item.age = new Date().getFullYear() - (Number(item.date) || 0)
    return item
  })

  const vars = useThemeVars()

  const slider = useSlider(sliderCfg)

  return (
    <Line
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      smooth={false}
      connectNulls={false}
      legend={getLegend({
        layout: 'horizontal',
        offsetY: -10,
        offsetX: 0,
        position: 'top-left',
        colors: colorMapLine,
      })}
      isStack={false}
      data={newData}
      xField="date"
      yField="value"
      slider={slider}
      seriesField="country"
      color={({ country }) => {
        return colorMapLine[country]
      }}
      annotations={[
        {
          type: 'line',
          start: ['min', 'median'],
          end: ['max', 'median'],
          style: {
            stroke: vars.color.primary['--color-bg-alert'],
            lineDash: [2, 2],
          },
        },
      ]}
    />
  )
}
