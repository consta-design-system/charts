import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { boolean, number, select, text } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { Gauge, GaugeProps } from '../Gauge'

import mdx from './Gauge.docs.mdx'

const getKnobs = () => ({
  percent: number('percent', 0.75),
  radius: number('radius', 0.75),
  withFormatter: boolean('withFormatter', true),
  type: select('type', ['default', 'meter'], 'default'),
  rangeColor: select('rangeColor', ['success', 'warning', 'alert', 'brand'], 'success'),
  statisticColor: select(
    'statisticColor',
    ['success', 'warning', 'alert', 'brand', 'system'],
    'system'
  ),
  indicatorColor: text('indicatorColor', '#ccd9e0'),
})

type ColorSignature =
  | '--color-bg-success'
  | '--color-bg-warning'
  | '--color-bg-alert'
  | '--color-bg-brand'
  | '--color-bg-system'

const Default = () => {
  const {
    percent,
    rangeColor,
    statisticColor,
    withFormatter,
    indicatorColor,
    radius,
    type,
  } = getKnobs()
  const customFormatter = (data: Record<string, number> | undefined): string => {
    return data && typeof data.percent === 'number'
      ? `${(Number(data.percent) * 100).toFixed(0)}%`
      : ''
  }

  const vars = useThemeVars()

  const options: GaugeProps = {
    percent,
    radius,
    type,
    range: {
      color: vars.color.primary[`--color-bg-${rangeColor}` as ColorSignature],
    },
    statistic: {
      content: {
        formatter: withFormatter ? customFormatter : undefined,
        style: {
          color: vars.color.primary[`--color-bg-${statisticColor}` as ColorSignature],
          fontSize: '54px',
          fontWeight: 'bold',
        },
      },
    },
    axis: {
      subTickLine: {
        count: 3,
      },
      label: {
        style: {
          fontSize: 12,
        },
      },
    },
    indicator: {
      pin: {
        style: {
          r: 16,
          stroke: indicatorColor,
          lineWidth: 6,
        },
      },
      pointer: {
        style: {
          stroke: indicatorColor,
          lineWidth: 6,
        },
      },
    },
  }

  return (
    <Gauge
      style={{
        width: 300,
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
  title: 'Компоненты|/Gauge',
  id: 'components/Gauge',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3852%3A230',
    },
  },
})
