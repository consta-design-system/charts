import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Radar, RadarProps } from '@/Radar'
import { dataMulti as data } from '@/Radar/__mocks__/mock.data'

export function RadarExampleMulti() {
  const vars = useThemeVars()

  const options: RadarProps = {
    data,
    color: [vars.color.primary['--color-bg-success'], vars.color.primary['--color-bg-normal']],
    xField: 'skill',
    yField: 'star',
    seriesField: 'person',
  }

  return <Radar {...options} />
}

export function RadarExampleArea() {
  const vars = useThemeVars()

  const options: RadarProps = {
    data,
    color: [vars.color.primary['--color-bg-success'], vars.color.primary['--color-bg-normal']],
    xField: 'skill',
    yField: 'star',
    seriesField: 'person',
    area: {},
    point: {
      size: 2,
    },
  }

  return <Radar {...options} />
}

export function RadarExampleAxis() {
  const vars = useThemeVars()

  const options: RadarProps = {
    data,
    xField: 'skill',
    yField: 'star',
    color: [vars.color.primary['--color-bg-success'], vars.color.primary['--color-bg-normal']],
    seriesField: 'person',
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
