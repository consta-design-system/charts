import React from 'react'

import { Radar, RadarProps } from '@/Radar'
import { data } from '@/Radar/__mocks__/mock.data'

export function RadarExample() {
  const options: RadarProps = {
    data,
    xField: 'name',
    yField: 'star',
    seriesField: 'user',
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
