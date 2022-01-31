import { ColumnOptions as G2plotColumnProps } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/hooks/useChart'

type ExcludeProps = 'tooltip' | 'children' | 'theme' | 'data' | 'xField' | 'yField' | 'seriesField'

export type ColumnProps<ITEM> = Omit<G2plotColumnProps, ExcludeProps> & {
  tooltip?: Tooltip<ITEM>
  theme?: never
  children?: never
  data: ITEM[]
  xField: keyof ITEM
  yField: keyof ITEM
  seriesField?: keyof ITEM
} & ContainerProps

export type ColumnComponentType = <ITEM>(props: ColumnProps<ITEM>) => React.ReactElement | null
