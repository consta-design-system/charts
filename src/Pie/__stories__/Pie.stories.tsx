import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Pie } from '../Pie'

import mdx from './Pie.docs.mdx'

const Default = () => {
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
      radius={1}
      statistic={{
        title: {
          formatter: v => v?.type || 'Всего',
          style: {
            color: vars.color.primary['--color-typo-primary'],
          },
        },
      }}
      innerRadius={0.64}
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
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3798%3A11317',
    // },
  },
})
