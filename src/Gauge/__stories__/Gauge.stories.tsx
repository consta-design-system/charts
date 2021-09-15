import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { Gauge, GaugeProps } from '../Gauge'

import mdx from './Gauge.docs.mdx'

const Default = () => {
  const customFormatter = (data: Record<string, number> | undefined): string => {
    return data && typeof data.percent === 'number'
      ? `${(Number(data.percent) * 100).toFixed(0)}%`
      : ''
  }

  const vars = useThemeVars()

  const options: GaugeProps = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: vars.color.primary['--color-bg-success'],
    },
    statistic: {
      content: {
        formatter: customFormatter,
        style: {
          color: vars.color.primary['--color-bg-default'],
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
          stroke: vars.color.primary['--color-bg-border'],
          lineWidth: 6,
        },
      },
      pointer: {
        style: {
          stroke: vars.color.primary['--color-bg-border'],
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
