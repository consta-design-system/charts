import React from 'react'

import { boolean, number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { data, DataType } from '../__mocks__/mock.data'
import { Radar, RadarProps } from '../Radar'

import mdx from './Radar.docs.mdx'

const colorScheme: { [key: string]: { [key: string]: string } } = {
  'Person 1': {
    line: '#ffc0cb',
    area: '#ffc0cb',
  },
  'Person 2': {
    line: '#ffd88a',
    area: '#ffd88a',
  },
}

const getKnobs = () => ({
  seriesField: select('seriesField', ['name', 'star', 'user'], 'user'),
  dotsSize: number('dotsSize', 0),
  smooth: boolean('smooth', false),
  round: boolean('round', false),
  withArea: boolean('withArea', true),
  lineDashed: boolean('lineDashed', false),
  color: object('colorScheme', colorScheme),
  data: object('data', data),
})

const Default = () => {
  const { data, seriesField, dotsSize, color, smooth, lineDashed, withArea, round } = getKnobs()

  const options: RadarProps = {
    data,
    xField: 'name',
    yField: 'star',
    seriesField,
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
        stroke: color[element.user]?.line,
        lineDash: lineDashed ? [10] : [],
      }
    },
    area: withArea
      ? {
          style: (element: DataType) => {
            return {
              fill: color[element.user]?.area,
            }
          },
        }
      : undefined,
    point: {
      size: dotsSize,
      color: '#000',
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
