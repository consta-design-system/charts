import { BarOptions as G2plotBarProps } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'

type ExcludeProps = 'tooltip' | 'children' | 'theme' | 'data' | 'xField' | 'yField' | 'seriesField'

export type BarProps<ITEM> = Omit<G2plotBarProps, ExcludeProps> & {
  tooltip?: Tooltip<ITEM>
  theme?: never
  children?: never
  data: ITEM[]
  xField: keyof ITEM
  yField: keyof ITEM
  seriesField?: keyof ITEM
} & ContainerProps

export type BarComponentType = <ITEM>(props: BarProps<ITEM>) => React.ReactElement | null
