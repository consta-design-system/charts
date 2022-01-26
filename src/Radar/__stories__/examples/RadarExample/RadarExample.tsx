import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Radar, RadarProps } from '@/Radar'
import { data } from '@/Radar/__mocks__/mock.data'

export function RadarExample() {
  const vars = useThemeVars()

  const options: RadarProps = {
    data,
    xField: 'name',
    yField: 'star',
    seriesField: 'user',
    color: [vars.color.primary['--color-bg-success'], vars.color.primary['--color-bg-normal']],
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
      },
    },
    area: {},
    point: {
      size: 2,
    },
    smooth: false,
    meta: {
      star: {
        min: 0,
        nice: true,
      },
    },
  }

  return <Radar {...options} />
}
