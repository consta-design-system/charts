import React from 'react'

import { array, boolean, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Bar } from '../Bar'

import mdx from './Bar.docs.mdx'

const getKnobs = () => ({
  seriesField: select('seriesField', ['value', 'name', 'month'], 'name'),
  withLabel: boolean('withLabel', false),
  isStack: boolean('isStack', true),
  isGroup: boolean('isGroup', false),
  isPercent: boolean('isPercent', false),
  colors: array('colors', ['#22C38E', '#F2C94C', '#F38B00', '#EB5757']),
  data: object('data', data),
})

const Default = () => {
  const { withLabel, seriesField, data, isStack, isGroup, isPercent, colors } = getKnobs()

  return (
    <Bar
      data={data}
      padding="auto"
      xField="value"
      yField="month"
      seriesField={seriesField}
      marginRatio={0}
      isGroup={isGroup}
      isPercent={isPercent}
      isStack={isStack}
      color={colors}
      label={
        withLabel && {
          position: 'middle',
          layout: [
            { type: 'interval-adjust-position' },
            { type: 'interval-hide-overlap' },
            { type: 'adjust-color' },
          ],
        }
      }
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Bar',
  id: 'components/Bar',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3803%3A11645',
    },
  },
})
