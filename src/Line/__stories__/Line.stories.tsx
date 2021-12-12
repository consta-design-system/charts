import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { boolean, number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { colorMapLine, data } from '../__mocks__/mock.data'
import { Line } from '../Line'

import mdx from './Line.docs.mdx'

const getKnobs = () => ({
  xField: select('xField', ['year', 'country'], 'year'),
  yField: select('yField', ['value', 'age'], 'value'),
  seriesField: select('seriesField', ['country', 'value', 'year', 'age'], 'country'),
  smooth: boolean('smooth', false),
  dashWidth: number('dashWidth', 0),
  connectNulls: boolean('connectNulls', false),
  isStack: boolean('isStack', false),
  lineColor: object('lineColor', colorMapLine),
})

const newData = data.map(item => {
  item.age = new Date().getFullYear() - (Number(item.year) || 0)
  return item
})

const Default = () => {
  const {
    xField,
    yField,
    seriesField,
    lineColor,
    smooth,
    connectNulls,
    isStack,
    dashWidth,
  } = getKnobs()

  const vars = useThemeVars()

  return (
    <Line
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      smooth={smooth}
      connectNulls={connectNulls}
      isStack={isStack}
      data={newData}
      xField={xField}
      yField={yField}
      seriesField={seriesField}
      color={({ country }) => {
        return lineColor[country]
      }}
      lineStyle={{
        lineDash: [dashWidth],
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

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Line',
  id: 'components/Line',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=143%3A12',
    },
  },
})
