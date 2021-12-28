import React from 'react'

import { boolean, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { colorMapArea, colorMapLine, data } from '../__mocks__/mock.data'
import { Area } from '../Area'

import mdx from './Area.docs.mdx'

const sliderCfg = {
  start: 0,
  end: 1,
  height: 20,
  trendCfg: {
    smooth: true,
    isArea: true,
  },
}

const getKnobs = () => ({
  xField: select('xField', ['year', 'country'], 'year'),
  yField: select('yField', ['value', 'age'], 'value'),
  seriesField: select('seriesField', ['country', 'value', 'year', 'age'], 'country'),
  withSlider: boolean('withSlider', false),
  slider: object('slider', sliderCfg),
  areaColor: object('areaColor', colorMapArea),
  lineColor: object('lineColor', colorMapLine),
})

const newData = data.map(item => {
  item.age = new Date().getFullYear() - (Number(item.year) || 0)
  return item
})

export function Playground() {
  const { xField, yField, seriesField, areaColor, lineColor, withSlider, slider } = getKnobs()

  return (
    <Area
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      data={newData}
      xField={xField}
      yField={yField}
      seriesField={seriesField}
      slider={withSlider && slider}
      line={{
        style: ({ country }) => {
          return {
            stroke: lineColor[country],
          }
        },
      }}
      areaStyle={({ country }) => {
        return {
          stroke: areaColor[country],
          fill: areaColor[country],
        }
      }}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Area',
  id: 'components/Area',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3680%3A10824',
    },
  },
})
