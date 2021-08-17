import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'
import { Text } from '@consta/uikit/Text'

import { Pie } from '@/Pie'
import { data } from '@/Pie/__mocks__/mock.data'

function sum(array?: Array<{ type: string; value: number }>) {
  if (!array) {
    return '0'
  }
  let s: number = 0
  for (const item of array) {
    s += item.value
  }
  return s.toString()
}

export function PieExample() {
  const vars = useThemeVars()

  return (
    <Pie
      style={{
        width: 800,
        height: '100%',
        marginBottom: 'var(--space-xl)',
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
        content: {
          customHtml: (_v, _v2, v3, v4) => <Text size="3xl">{v3?.value || sum(v4)}</Text>,
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

export function PieExampleDonut() {
  return (
    <Pie
      style={{
        width: 800,
        height: '100%',
        marginBottom: 'var(--space-xl)',
      }}
      data={data}
      angleField="value"
      colorField="type"
      innerRadius={0.64}
      statistic={{
        title: false,
        content: false,
      }}
    />
  )
}
