import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/data.mock'
import { Scatter } from '../Scatter'

import mdx from './Scatter.docs.mdx'

const getKnobs = () => ({
  type: select('type', ['jitter', 'stack', 'symmetric'], 'jitter'),
  size: number('size', 5),
  color: select('color', ['success', 'warning', 'alert', 'brand'], 'brand'),
  shape: select(
    'shape',
    [
      'circle',
      'square',
      'bowtie',
      'diamond',
      'hexagon',
      'triangle',
      'triangle-down',
      'hollow-circle',
      'hollow-square',
      'hollow-bowtie',
      'hollow-diamond',
      'hollow-hexagon',
      'hollow-triangle',
      'hollow-triangle-down',
      'cross',
      'tick',
      'plus',
      'hyphen',
      'line',
    ],
    'circle'
  ),
  data: object('data', data),
})

type ColorSignature =
  | '--color-bg-success'
  | '--color-bg-warning'
  | '--color-bg-alert'
  | '--color-bg-brand'

const Default = () => {
  const { data, type, size, color, shape } = getKnobs()

  const vars = useThemeVars()

  return (
    <Scatter
      style={{
        width: 800,
        height: '100%',
      }}
      type={type}
      data={data}
      size={size}
      color={vars.color.primary[`--color-bg-${color}` as ColorSignature]}
      shape={shape}
      xField="x"
      yField="y"
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
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8410%3A38643',
    },
  },
})
