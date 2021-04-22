import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Line, LineProps } from '../Line'

const pxInNumber = (string: string) => Number(string.replace('px', ''))

const Default = () => {
  const vars = useThemeVars()

  const options: LineProps = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    yAxis: {
      tickLine: {
        length: 0,
      },
      label: {
        style: {
          fill: vars.color.primary['--color-typo-secondary'],
        },
      },
      grid: {
        line: {
          style: {
            stroke: vars.color.primary['--color-bg-system'],
            lineWidth: pxInNumber(vars.space['--space-3xs']),
          },
        },
      },
    },
    xAxis: {
      tickLine: {
        length: 4,
        style: {
          stroke: vars.color.primary['--color-bg-system'],
        },
      },
      label: {
        style: {
          fill: vars.color.primary['--color-typo-secondary'],
        },
      },
    },
    point: {
      size: pxInNumber(vars.space['--space-2xs']),
      style: {
        stroke: 'transparent',
      },
    },
    annotations: [
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
    ],
    theme: {
      styleSheet: {
        fontFamily: vars.font['--font-primary'],
      },
    },
  }

  return (
    <Line
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
  title: 'Компоненты|/Line',
  id: 'components/Line',
})
