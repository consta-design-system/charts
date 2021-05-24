import { LineOptions as G2plotLineProps, ShapeStyle } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'

type ExcludeProps =
  | 'tooltip'
  | 'children'
  | 'theme'
  | 'data'
  | 'lineStyle'
  | 'xField'
  | 'yField'
  | 'seriesField'

export type LineProps<ITEM> = Omit<G2plotLineProps, ExcludeProps> & {
  tooltip?: Tooltip<ITEM>
  theme?: never
  children?: never
  data: ITEM[]
  lineStyle?: ShapeStyle | ((item: ITEM) => ShapeStyle)
  xField: keyof ITEM
  yField: keyof ITEM
  seriesField?: keyof ITEM
} & ContainerProps

export type LineComponentType = <ITEM>(props: LineProps<ITEM>) => React.ReactElement | null
