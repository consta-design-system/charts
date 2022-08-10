import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { array, boolean, number, object } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Pie } from '../Pie'

import mdx from './Pie.docs.mdx'

const getKnobs = () => ({
  radius: number('radius', 1),
  innerRadius: number('innerRadius', 0.64),
  withFormatter: boolean('withFormatter', true),
  startAngle: number('startAngle', 0),
  endAngle: number('endAngle', 360),
  colors: array('colors', ['#22C38E', '#F2C94C', '#F38B00', '#EB5757', '#56B9F2', '#0071B2']),
  data: object('data', data),
})

const Default = () => {
  const { data, withFormatter, radius, innerRadius, colors, startAngle, endAngle } = getKnobs()

  const vars = useThemeVars()

  return (
    <Pie
      style={{
        width: 800,
        height: '100%',
      }}
      data={data}
      angleField="value"
      colorField="type"
      radius={radius}
      color={colors}
      startAngle={startAngle * (Math.PI / 180)}
      endAngle={endAngle * (Math.PI / 180)}
      statistic={{
        title: {
          formatter: withFormatter ? v => v?.type || 'Всего' : undefined,
          style: {
            color: vars.color.primary['--color-typo-primary'],
          },
        },
      }}
      innerRadius={innerRadius}
      label={{
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      }}
      interactions={[{ type: 'pie-statistic-active' }]}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Pie',
  id: 'components/Pie',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8252%3A32932',
    },
  },
})
