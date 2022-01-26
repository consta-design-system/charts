import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { boolean, number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'
import { getLegend } from '@/__private__/utils/legend'

import { data, DataType } from '../__mocks__/mock.data'
import { Radar, RadarProps } from '../Radar'

import mdx from './Radar.docs.mdx'

const getKnobs = () => ({
  seriesField: select('seriesField', ['name', 'star', 'user'], 'user'),
  dotsSize: number('dotsSize', 0),
  smooth: boolean('smooth', false),
  round: boolean('round', false),
  withArea: boolean('withArea', true),
  lineDashed: boolean('lineDashed', false),
  data: object('data', data),
})

const Default = () => {
  const { data, seriesField, dotsSize, smooth, lineDashed, withArea, round } = getKnobs()

  const vars = useThemeVars()

  const colors = {
    'Person 1': vars.color.primary['--color-bg-success'],
    'Person 2': vars.color.primary['--color-bg-normal'],
  }

  const options: RadarProps = {
    data,
    xField: 'name',
    yField: 'star',
    seriesField,
    color: [colors['Person 1'], colors['Person 2']],
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    xAxis: !round
      ? {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        }
      : undefined,
    yAxis: !round
      ? {
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
        }
      : undefined,
    lineStyle: (element: DataType) => {
      return {
        stroke: colors[element.user],
        lineDash: lineDashed ? [10] : [],
      }
    },
    area: withArea
      ? {
          style: (element: DataType) => {
            return {
              fill: colors[element.user],
            }
          },
        }
      : undefined,
    point: {
      size: dotsSize,
    },
    smooth,
    meta: {
      star: {
        min: 0,
        nice: true,
      },
    },
  }

  return (
    <Radar
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      {...options}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Radar',
  id: 'components/Radar',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3852%3A0',
    },
  },
})
