import { AreaOptions as G2plotAreaProps, ShapeStyle } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'
import { MappingOptions } from '@/__private__/utils/types/MappingOptions'

type ExcludeProps =
  | 'tooltip'
  | 'children'
  | 'theme'
  | 'data'
  | 'areaStyle'
  | 'xField'
  | 'yField'
  | 'seriesField'
  | 'line'
  | 'point'

export type AreaProps<ITEM> = Omit<G2plotAreaProps, ExcludeProps> & {
  tooltip?: Tooltip<ITEM>
  theme?: never
  children?: never
  data: ITEM[]
  areaStyle?: ((item: ITEM) => ShapeStyle) | ShapeStyle
  line?: MappingOptions<ITEM>
  point?: MappingOptions<ITEM>
  xField: keyof ITEM
  yField: keyof ITEM
  seriesField?: keyof ITEM
} & ContainerProps

export type AreaComponentType = <ITEM>(props: AreaProps<ITEM>) => React.ReactElement | null
