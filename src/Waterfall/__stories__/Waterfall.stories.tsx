import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/data.mock'
import { Waterfall } from '../Waterfall'

import mdx from './Waterfall.docs.mdx'

const Default = () => {
  const vars = useThemeVars()
  return (
    <Waterfall
      style={{
        width: 800,
        height: '100%',
      }}
      data={data}
      xField="type"
      yField="money"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      risingFill={vars.color.primary['--color-bg-success']}
      fallingFill={vars.color.primary['--color-bg-alert']}
      total={{
        style: {
          fill: vars.color.primary['--color-bg-system'],
        },
      }}
      yAxis={{
        grid: {
          line: {
            style: {
              lineDash: null,
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
      }}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Waterfall',
  id: 'components/Waterfall',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3847%3A11645',
    },
  },
})
