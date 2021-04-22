import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { Liquid } from '../Liquid'

const Default = () => {
  return (
    <Liquid
      style={{
        width: 800,
        height: '100%',
      }}
      percent={0.25}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Liquid',
  id: 'components/Liquid',
})
