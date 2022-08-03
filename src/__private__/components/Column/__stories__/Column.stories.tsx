import React from 'react'

import { array, boolean, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'
import { getLegend } from '@/__private__/utils/legend'

import { data } from '../__mocks__/mock.data'
import { Column } from '../Column'

import mdx from './Column.docs.mdx'

const getKnobs = () => ({
  xField: select('xField', ['name', 'month'], 'month'),
  yField: select('yField', ['value', 'group'], 'value'),
  seriesField: select('seriesField', ['name', 'month', 'value', 'group'], 'name'),
  colors: array('colors', ['#F38B00', '#22C38E']),
  isGroup: boolean('isGroup', false),
  isStack: boolean('isStack', true),
  isRange: boolean('isRange', false),
  isPercent: boolean('isPercent', false),
  data: object('data', data),
})

const Default = () => {
  const {
    data,
    xField,
    yField,
    seriesField,
    isGroup,
    isPercent,
    isRange,
    isStack,
    colors,
  } = getKnobs()

  return (
    <Column
      style={{
        width: 800,
        height: '100%',
      }}
      legend={getLegend({ layout: 'horizontal', offsetY: -10, offsetX: 0, position: 'top-left' })}
      color={colors}
      isPercent={isPercent}
      isStack={isStack}
      isRange={isRange}
      isGroup={isGroup}
      data={data}
      renderer="svg"
      padding="auto"
      xField={xField}
      yField={yField}
      seriesField={seriesField}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Column',
  id: 'components/Column',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8243%3A32883',
    },
  },
})
