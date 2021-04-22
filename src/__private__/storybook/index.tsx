import { select } from '@storybook/addon-knobs'
import { CSFStory, StoryMetadata } from '@storybook/types'

export * from './components'
export * from './decorators'

export const createStory = (component: CSFStory, params: CSFStory['story'] = {}) => {
  component.story = { ...params }

  return component
}

export const createMetadata = (params: StoryMetadata) => params

export const getStoryIds = (obj: Record<string, unknown>) => Object.keys(obj)

export const optionalSelect = <T extends string>(
  name: string,
  options: readonly T[],
  value?: T,
  groupId?: string
) => {
  const optionsObject = {
    '--': undefined,
    ...options.reduce<Record<string, T>>((acc, item) => {
      acc[item] = item
      return acc
    }, {}),
  }

  return select(name, optionsObject, value, groupId) || undefined
}
