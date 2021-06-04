declare module '*.svg' {
  export const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement> & {
    children?: never
  }>
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module 'storybook-addon-smart-knobs' {
  import { DecoratorFn } from '@storybook/react'

  export const withSmartKnobs: (options?: { ignoreProps?: readonly string[] }) => DecoratorFn
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

declare module '@storybook/addon-docs/blocks' {
  export const Preview: React.ComponentType<{}>
  export const Props: React.ComponentType<{
    of: any
  }>
}

// После переезда на Storybook@6 брать типы оттуда
// Задача: https://jira.csssr.io/browse/GDC-320
declare module '@storybook/types' {
  import { DecoratorFn } from '@storybook/react'

  export type EnvironmentDecoratorParams = {
    scaling?: boolean
    style?: React.CSSProperties
  }

  export type CSFStory = {
    (): JSX.Element
    story?: {
      name?: string
      decorators?: readonly DecoratorFn[]
      parameters?: {
        [name: string]: unknown
        environment?: EnvironmentDecoratorParams
      }
    }
  }

  export type StoryMetadata = {
    title: string
    id: string
    decorators?: readonly DecoratorFn[]
    includeStories?: string[]
    excludeStories?: string[]
    parameters?: {
      docs?: {
        page: (props: any) => JSX.Element
      }
      design?: {
        type: string
        url: string
      }
      environment?: EnvironmentDecoratorParams
    }
  }
}
