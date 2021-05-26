import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Line } from '../Line'

import mdx from './Line.docs.mdx'

const pxInNumber = (string: string) => Number(string.replace('px', ''))

const Default = () => {
  const vars = useThemeVars()

  return (
    <Line
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      data={data}
      xField="year"
      yField="value"
      seriesField="country"
      annotations={[
        {
          type: 'text',
          position: ['min', 'median'],
          content: 'Предел',
          offsetY: -4,
          style: {
            textBaseline: 'bottom',
            fontSize: pxInNumber(vars.size['--size-text-m']),
            fill: vars.color.primary['--color-typo-primary'],
          },
        },
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
  },
})
