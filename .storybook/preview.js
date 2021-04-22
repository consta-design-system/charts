import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withPropsTable } from 'storybook-addon-react-docgen'

import {
  DocsDecorator,
  environmentDecorator,
  listOfThemes,
  ThemeDecorator,
} from '@/__private__/storybook'

import stub from './stub.mdx'

import './storybook.css'

addDecorator(withPropsTable)
addDecorator(withKnobs)
addDecorator(environmentDecorator())
addDecorator(
  withInfo({
    header: false,
  })
)

const storySort = (a, b) => {
  const orderA = a[1].parameters.order
  const orderB = b[1].parameters.order
  const idA = a[0]
  const idB = b[0]

  if (orderA && orderB) {
    return orderA - orderB
  }
  if (orderA) {
    return -1
  }
  if (orderB) {
    return 1
  }
  if (idA < idB) {
    return -1
  }
  if (idA > idB) {
    return 1
  }
  return 0
}

addParameters({
  themes: {
    list: listOfThemes,
    Decorator: ThemeDecorator,
  },
  docs: {
    container: DocsDecorator,
    page: stub,
  },
  options: {
    theme: themes.dark,
    showRoots: true,
    storySort,
  },
})

window.document.documentElement.lang = 'ru'
