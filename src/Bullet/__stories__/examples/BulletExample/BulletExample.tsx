import React from 'react'

import { data, dataSingle } from '../../../__mocks__/mock.data'
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

export function BulletExampleSingle() {
  return (
    <Bullet
      style={{
        height: '140px',
      }}
      data={dataSingle}
      measureField="mesures"
      rangeField="range"
      targetField="target"
      xField="title"
    />
  )
}

export function BulletExampleLabel() {
  return (
    <Bullet
      style={{
        height: '140px',
        marginBottom: 'var(--space-l)',
      }}
      data={dataSingle}
      measureField="mesures"
      rangeField="range"
      targetField="target"
      xField="title"
    />
  )
}

export function BulletExampleNoAxys() {
  return (
    <Bullet
      style={{
        height: '100px',
      }}
      data={dataSingle}
      measureField="mesures"
      rangeField="range"
      targetField="target"
      xField="title"
      yAxis={false}
    />
  )
}
