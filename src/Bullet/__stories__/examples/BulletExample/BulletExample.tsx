import React from 'react'

import { data } from '../../../__mocks__/mock.data'
import { Bullet } from '../../../Bullet'

export function BulletExample() {
  return (
    <Bullet
      data={data}
      measureField="measures"
      rangeField="ranges"
      targetField="target"
      xField="title"
    />
  )
}
