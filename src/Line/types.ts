import { LineOptions as G2plotLineProps, ShapeStyle } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'
import { ChartRefOptions } from '@/__private__/utils/types/ChartRefOptions'

export type LineProps<Item> = Omit<G2plotLineProps, 'tooltip' | 'theme' | 'data' | 'lineStyle'> & {
  tooltip?: Tooltip
  theme?: never
  children?: never
  data: Item[]
  lineStyle: ShapeStyle | ((item: Item) => ShapeStyle)
} & ContainerProps &
  React.RefAttributes<HTMLDivElement> & { chartRef?: ChartRefOptions }

export type Line = <Item>(props: LineProps<Item>) => React.ReactElement | null
