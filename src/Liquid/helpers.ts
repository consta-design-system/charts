import { ThemeVars } from '@consta/uikit/useThemeVars'

import { LiquidProps } from './Liquid'

export const withDefaultProps = (props: LiquidProps, vars: ThemeVars): LiquidProps => {
  return {
    ...props,
    statistic: {
      content: {
        style: {
          fontSize: vars.size['--size-text-3xl'],
          lineHeight: vars.space['--space-3xl'],
          fill: vars.color.primary['--color-typo-primary'],
        },
        ...props.statistic?.content,
      },
      ...props.statistic,
    },
  }
}
