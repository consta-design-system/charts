import React from 'react'

import { array, number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'
import { getLegend } from '@/__private__/utils/legend'

import { stackedData } from '../__mocks__/mock.data'
import { Histogram, HistogramProps } from '../Histogram'

import mdx from './Histogram.docs.mdx'

const getKnobs = () => ({
  binWidth: number('binWidth', 4),
  stackField: select('stackField', ['name', 'value'], 'name'),
  colors: array('colors', ['#22C38E', '#56B9F2', '#F38B00']),
  data: object('data', stackedData),
})

const Default = () => {
  const { data, colors, binWidth, stackField } = getKnobs()

  const options: HistogramProps = {
    data,
    binField: 'value',
    stackField,
    binWidth,
    color: colors,
    meta: {
      range: {
        tickInterval: 10,
      },
      count: {
        max: 50,
        nice: false,
      },
    },
  }

  return (
    <Histogram
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      style={{
        width: 800,
        height: '100%',
      }}
      {...options}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Histogram',
  id: 'components/Histogram',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3824%3A11584',
    },
  },
})
