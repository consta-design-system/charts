import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { Liquid } from '../Liquid'

const Default = () => {
  return <Liquid percent={0.25} renderer="svg" />
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Liquid',
  id: 'components/Liquid',
})
