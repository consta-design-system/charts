import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters } from '@storybook/react'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { theme } from './manager'

import {
  DocsDecorator,
  environmentDecorator,
  listOfThemes,
  ThemeDecorator,
} from '@/__private__/storybook'

import './storybook.css'
import mdx from './stub.stories.mdx'

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
    page: mdx,
  },
  options: {
    theme,
    showRoots: true,
    storySort,
  },
})

window.document.documentElement.lang = 'ru'
