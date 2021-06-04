import React from 'react'

import { Pie } from '@/Pie'
import { data } from '@/Pie/__mocks__/mock.data'

export function PieSimpleExample() {
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
    />
  )
}
