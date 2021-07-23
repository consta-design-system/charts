import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/data.mock'
import { Scatter } from '../Scatter'

import mdx from './Scatter.docs.mdx'

const Default = () => {
  const vars = useThemeVars()

  return (
    <Scatter
      style={{
        width: 800,
        height: '100%',
      }}
      data={data}
      xField="x"
      yField="y"
      size={5}
      xAxis={{
        grid: {
          line: {
            style: {
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
        line: {
          style: {
            stroke: vars.color.primary['--color-bg-system'],
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
  title: 'Компоненты|/Scatter',
  id: 'components/Scatter',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3743%3A0',
    },
  },
})
