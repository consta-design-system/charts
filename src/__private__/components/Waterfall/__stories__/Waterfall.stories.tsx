import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'
import { getLegend } from '@/__private__/utils/legend'

import { data } from '../__mocks__/data.mock'
import { Waterfall } from '../Waterfall'

import mdx from './Waterfall.docs.mdx'

const getKnobs = () => ({
  risingFill: select('risingFill', ['success', 'warning', 'alert', 'brand'], 'success'),
  fallingFill: select('fallingFill', ['success', 'warning', 'alert', 'brand'], 'alert'),
  columnWidthRatio: number('columnWidthRatio', 0.5),
  labelMode: select('labelMode', ['absolute', 'difference'], 'difference'),
  data: object('data', data),
})

type ColorSignature =
  | '--color-bg-success'
  | '--color-bg-warning'
  | '--color-bg-alert'
  | '--color-bg-brand'

const Default = () => {
  const { data, risingFill, fallingFill, columnWidthRatio, labelMode } = getKnobs()

  const vars = useThemeVars()

  return (
    <Waterfall
      style={{
        width: 800,
        height: '100%',
      }}
      data={data}
      labelMode={labelMode}
      xField="type"
      columnWidthRatio={columnWidthRatio}
      yField="money"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      risingFill={vars.color.primary[`--color-bg-${risingFill}` as ColorSignature]}
      fallingFill={vars.color.primary[`--color-bg-${fallingFill}` as ColorSignature]}
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
