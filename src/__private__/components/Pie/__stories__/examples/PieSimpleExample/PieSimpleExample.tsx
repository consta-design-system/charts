import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Pie } from '@/__private__/components/Pie'
import { data } from '@/__private__/components/Pie/__mocks__/mock.data'

export function PieSimpleExample() {
  const vars = useThemeVars()

  return (
    <Pie
      style={{
        width: 800,
        height: '100%',
        marginBottom: 'var(--space-xl)',
      }}
      color={[
        vars.color.primary['--color-bg-success'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-caution'],
        vars.color.primary['--color-bg-alert'],
        vars.color.primary['--color-bg-normal'],
        vars.color.primary['--color-bg-brand'],
      ]}
      data={data}
      angleField="value"
      colorField="type"
    />
  )
}
